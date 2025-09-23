addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const xOpenpimsHeader = request.headers.get('x-openpims')
  const userAgent = request.headers.get('user-agent')
  const openPIMSUrl = parseOpenPIMSFromUserAgent(userAgent)
  const url = new URL(request.url)
  const cookies = request.headers.get('cookie')

  const hasAcceptAllCookiesParam = url.searchParams.get('accept_all_cookies') === '1'
  const hasAcceptAllCookiesCookie = cookies && cookies.includes('openpims_accept_all_cookies=true')

  if (hasAcceptAllCookiesParam) {
    const response = await fetch(request)
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    })
    newResponse.headers.append('set-cookie', 'openpims_accept_all_cookies=true; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000')
    return newResponse
  }

  if (hasAcceptAllCookiesCookie) {
    return fetch(request)
  }

  if (!xOpenpimsHeader && !openPIMSUrl) {
    const cookieConfigUrl = OPENPIMS_CONFIG_URL || `https://${url.hostname}/openpims.json`
    return Response.redirect(`https://openpims.de/?url=${encodeURIComponent(cookieConfigUrl)}`, 302)
  }

  const isEuRequest = await isRequestFromEU(request)
  const response = await fetch(request)

  if (!response.headers.has('set-cookie')) {
    return response
  }

  if (!isEuRequest) {
    return response
  }

  try {
    const url = new URL(request.url)
    let cookieConfigUrl

    if (openPIMSUrl) {
      cookieConfigUrl = `${openPIMSUrl}/openpims.json`
    } else {
      cookieConfigUrl = OPENPIMS_CONFIG_URL || `https://${url.hostname}/openpims.json`
    }

    const allowedCookies = await getAllowedCookies(cookieConfigUrl)

    if (!allowedCookies || allowedCookies.length === 0) {
      return response
    }

    const filteredResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    })

    const setCookieHeaders = response.headers.getSetCookie()
    filteredResponse.headers.delete('set-cookie')

    for (const cookieHeader of setCookieHeaders) {
      const cookieName = getCookieName(cookieHeader)

      if (allowedCookies.includes(cookieName)) {
        filteredResponse.headers.append('set-cookie', cookieHeader)
      }
    }

    return filteredResponse

  } catch (error) {
    console.error('Error filtering cookies:', error)
    return response
  }
}

async function getAllowedCookies(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Cloudflare-Worker-Cookie-Filter'
      }
    })

    if (!response.ok) {
      console.error(`Failed to fetch allowed cookies from ${url}: ${response.status}`)
      return []
    }

    const cookies = await response.json()

    if (Array.isArray(cookies)) {
      return cookies
    } else if (cookies.allowed_cookies && Array.isArray(cookies.allowed_cookies)) {
      return cookies.allowed_cookies
    }

    return []

  } catch (error) {
    console.error('Error fetching allowed cookies:', error)
    return []
  }
}

function getCookieName(cookieHeader) {
  const nameValuePair = cookieHeader.split(';')[0]
  const equalIndex = nameValuePair.indexOf('=')

  if (equalIndex === -1) {
    return nameValuePair.trim()
  }

  return nameValuePair.substring(0, equalIndex).trim()
}

function parseOpenPIMSFromUserAgent(userAgent) {
  if (!userAgent) {
    return null
  }

  const openPIMSMatch = userAgent.match(/OpenPIMS\/[\d.]+\s+\(\+([^)]+)\)/)

  if (openPIMSMatch && openPIMSMatch[1]) {
    return openPIMSMatch[1]
  }

  return null
}

async function isRequestFromEU(request) {
  const cf = request.cf

  if (!cf || !cf.country) {
    return false
  }

  const euCountries = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
    'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
    'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'
  ]

  return euCountries.includes(cf.country)
}