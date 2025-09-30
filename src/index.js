const OPENPIMS_LOGO_SVG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45NTAwMDAwMDAwMDAwMDAzLDAsMCwwLjk1MDAwMDAwMDAwMDAwMDMsMTIuNzk5OTg2NDU3ODI0NjE2LDEyLjc5OTk5NTMyNjk5NTc0MikiPjxwYXRoIGQ9Ik01MDEuNzgzIDIzNS4yMzdjLTI5LjctMTAuNDk5LTQ5Ljc5OS0zOC42OTktNDkuNzk5LTcwLjE5OS42MDEtNS4xMDEtMS44LTkuMy01LjctMTIuOS0zLjMtMi43MDEtOC4zOTktMy45LTEyLjU5OS0zLjMwMS0yNS4yMDEgMy42LTQ5LjItMy42LTY3LjUtMTguM3MtMzEuMjAxLTM2Ljg5OS0zMy4zLTYyLjY5OWMtLjMtNC41MDEtMy4wMDEtOC43MDEtNi45MDEtMTEuNC0zLjktMi40MDEtOC42OTktMy4wMDEtMTMuMi0xLjIwMS00MC44IDE0LjctNzkuMi0xMS4xLTk0LjQ5OS00Ni4xOTktMy4wMDEtNi42MDEtOS45MDEtMTAuMjAxLTE3LjEtOC42OTktNTcuNjAxIDEyLjktMTA5LjQwMSA0OS4wNi0xNDQuOCA5NC42NjEtODEuODk5IDEwNS4zLTczLjUgMjUwLjIwMSAxOC4zIDM0Mi4zMDEgOTkuOTAxIDk5LjU5OCAyNjEgOTkuNTk4IDM2MC42MDEgMCA0Ni4xOTktNDYuMjAxIDc2LjctMTEyLjA2MyA3Ni43LTE4Mi4yNjItLjYwMy05LjkwMS0uOTAzLTE2LjUtMTAuMjAzLTE5LjgwMnoiIHN0eWxlPSIiIGZpbGw9IiNmZmE1MDAiIGRhdGEtb3JpZ2luYWw9IiNmZWE4MzIiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNNTExLjk4MyAyNTUuMDM4YzAgNzAuMTk5LTMwLjUgMTM2LjA2MS03Ni43IDE4Mi4yNjItOTkuNiA5OS41OTgtMjYwLjcgOTkuNTk4LTM2MC42MDEgMGwyOTEuNTAxLTMwNi43NjNjMTguMyAxNC43IDQyLjI5OSAyMS44OTkgNjcuNSAxOC4zIDQuMi0uNTk5IDkuMy42MDEgMTIuNTk5IDMuMzAxIDMuOSAzLjYgNi4zMDEgNy43OTggNS43IDEyLjkgMCAzMS41IDIwLjA5OSA1OS43IDQ5Ljc5OSA3MC4xOTkgOS4zMDIgMy4zMDIgOS42MDIgOS45MDEgMTAuMjAyIDE5LjgwMXoiIHN0eWxlPSIiIGZpbGw9IiNmZmE1MDAiIGRhdGEtb3JpZ2luYWw9IiNmZTk5MjMiIGNsYXNzPSIiIG9wYWNpdHk9IjEiPjwvcGF0aD48cGF0aCBkPSJNMTkzLjQ4NCAzMTIuNDk5Yy03LjUtNi41OTktMTcuNzAxLTEwLjQ5OS0yOC41LTEwLjQ5OS0yNC45MDEgMC00NSAyMC4wOTktNDUgNDUgMCAxMS43IDQuNTAxIDIyLjIgMTEuNyAzMCA4LjA5OSA5LjMgMjAuMDk5IDE1IDMzLjMgMTUgMjQuOTAxIDAgNDUtMjAuMTAxIDQ1LTQ1LS4wMDEtMTQuMTAxLTYuMzAxLTI2LjQtMTYuNS0zNC41MDF6IiBzdHlsZT0iIiBmaWxsPSIjNzEzNzA4IiBkYXRhLW9yaWdpbmFsPSIjOTk0YzBmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PHBhdGggZD0iTTMxNC45ODMgMzAyYy0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1IDQ1IDIwLjE4NiA0NSA0NS0yMC4xODUgNDUtNDUgNDV6TTI5OS45ODMgNDIyYy0xNi41MzggMC0zMC0xMy40NjItMzAtMzBzMTMuNDYyLTMwIDMwLTMwIDMwIDEzLjQ2MiAzMCAzMC0xMy40NjIgMzAtMzAgMzB6IiBzdHlsZT0iIiBmaWxsPSIjNzEzNzA4IiBkYXRhLW9yaWdpbmFsPSIjNzEzNzA4IiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PHBhdGggZD0iTTE3OS45ODMgMjEyYy0xNi41MzggMC0zMC0xMy40NjItMzAtMzBzMTMuNDYyLTMwIDMwLTMwIDMwIDEzLjQ2MiAzMCAzMC0xMy40NjIgMzAtMzAgMzB6IiBzdHlsZT0iIiBmaWxsPSIjNzEzNzA4IiBkYXRhLW9yaWdpbmFsPSIjOTk0YzBmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PGNpcmNsZSBjeD0iNDA0LjIzOCIgY3k9IjMxOC4xMyIgcj0iMTUiIHN0eWxlPSIiIGZpbGw9IiM3MTM3MDgiIGRhdGEtb3JpZ2luYWw9IiM3MTM3MDgiIGNsYXNzPSIiIG9wYWNpdHk9IjEiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjEwNC4yMjgiIGN5PSIyNTguMTMiIHI9IjE1IiBzdHlsZT0iIiBmaWxsPSIjNzEzNzA4IiBkYXRhLW9yaWdpbmFsPSIjOTk0YzBmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L2NpcmNsZT48cGF0aCBkPSJNMjA5Ljk4MyAzNDdjMCAyNC44OTktMjAuMDk5IDQ1LTQ1IDQ1LTEzLjIgMC0yNS4yMDEtNS43LTMzLjMtMTVsNjEuOC02NC41MDFjMTAuMiA4LjEwMSAxNi41IDIwLjQgMTYuNSAzNC41MDF6IiBzdHlsZT0iIiBmaWxsPSIjNzEzNzA4IiBkYXRhLW9yaWdpbmFsPSIjNzEzNzA4IiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PC9nPjwvc3ZnPg=='

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
    const response = await fetch(request)
    const contentType = response.headers.get('content-type') || ''

    // Add button to reopen cookie settings for users with accept-all cookie
    if (contentType.includes('text/html')) {
      const cookieConfigUrl = OPENPIMS_CONFIG_URL || `https://${url.hostname}/openpims.json`
      const openpimsLink = `https://openpims.de/?url=${encodeURIComponent(cookieConfigUrl)}`

      let html = await response.text()

      const manageLinkHtml = `
        <div style="position: fixed; bottom: 20px; right: 20px; z-index: 999998; -webkit-transform: translateZ(0);">
          <button onclick="document.getElementById('openpims-settings-popup').style.display='flex'" style="display: inline-flex; align-items: center; gap: 8px; background: #007bff; color: white; padding: 10px 20px; border: none; text-decoration: none; border-radius: 6px; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow: 0 2px 10px rgba(0,0,0,0.2); cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='#0056b3'" onmouseout="this.style.background='#007bff'" ontouchstart="this.style.background='#0056b3'" ontouchend="this.style.background='#007bff'">
            🍪 Cookie-Einstellungen
          </button>
        </div>
        <div id="openpims-settings-popup" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 999999; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div style="background: white; padding: 30px; border-radius: 12px; max-width: 500px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); text-align: center; position: relative;">
            <button onclick="document.getElementById('openpims-settings-popup').style.display='none'" style="position: absolute; top: 10px; right: 10px; background: transparent; border: none; font-size: 24px; cursor: pointer; color: #999; line-height: 1;">&times;</button>
            <img src="${OPENPIMS_LOGO_SVG}" alt="OpenPIMS Logo" style="width: 120px; height: auto; margin: 0 auto 20px; display: block;">
            <h2 style="margin: 0 0 20px 0; color: #333; font-size: 24px;">Cookie-Einstellungen</h2>
            <p style="margin: 0 0 25px 0; color: #666; font-size: 16px; line-height: 1.5;">
              Sie haben aktuell alle Cookies akzeptiert. Möchten Sie Ihre Einstellungen ändern?
            </p>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
              <button onclick="document.getElementById('openpims-settings-popup').style.display='none'" style="background: #28a745; color: white; padding: 12px 30px; border: none; border-radius: 6px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='#218838'" onmouseout="this.style.background='#28a745'">
                Alle Cookies akzeptieren
              </button>
              <a href="${openpimsLink}" style="display: inline-flex; align-items: center; gap: 8px; background: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 500; transition: background 0.2s;">
                <img src="${OPENPIMS_LOGO_SVG}" alt="OpenPIMS" style="width: 20px; height: 20px;">
                Mit OpenPIMS verwalten
              </a>
            </div>
          </div>
        </div>
      `

      if (html.includes('</body>')) {
        html = html.replace('</body>', manageLinkHtml + '</body>')
      } else {
        html = html + manageLinkHtml
      }

      return new Response(html, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      })
    }

    return response
  }

  if (!xOpenpimsHeader && !openPIMSUrl) {
    const cookieConfigUrl = OPENPIMS_CONFIG_URL || `https://${url.hostname}/openpims.json`
    const openpimsLink = `https://openpims.de/?url=${encodeURIComponent(cookieConfigUrl)}`

    const response = await fetch(request)
    const contentType = response.headers.get('content-type') || ''

    // Only inject popup for HTML responses
    if (!contentType.includes('text/html')) {
      return response
    }

    let html = await response.text()

    const popupHtml = `
      <div id="openpims-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 999999; display: flex; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="background: white; padding: 30px; border-radius: 12px; max-width: 500px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); text-align: center;">
          <img src="https://openpims.de/openpims.svg" alt="OpenPIMS Logo" style="width: 120px; height: auto; margin: 0 auto 20px; display: block;">
          <h2 style="margin: 0 0 20px 0; color: #333; font-size: 24px;">Cookie-Management mit OpenPIMS</h2>
          <p style="margin: 0 0 25px 0; color: #666; font-size: 16px; line-height: 1.5;">
            Diese Website verwendet OpenPIMS für die Verwaltung von Cookies und Ihrer Datenschutz-Einstellungen.
          </p>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <button onclick="window.location.href = window.location.href + (window.location.href.includes('?') ? '&' : '?') + 'accept_all_cookies=1'" style="background: #28a745; color: white; padding: 12px 30px; border: none; border-radius: 6px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='#218838'" onmouseout="this.style.background='#28a745'">
              Alle Cookies akzeptieren
            </button>
            <a href="${openpimsLink}" style="display: inline-flex; align-items: center; gap: 8px; background: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 500; transition: background 0.2s;">
              <img src="https://openpims.de/openpims.svg" alt="OpenPIMS" style="width: 20px; height: 20px;">
              Cookie-Einstellungen öffnen
            </a>
          </div>
        </div>
      </div>
    `

    // If no </body> tag found, append at the end
    if (html.includes('</body>')) {
      html = html.replace('</body>', popupHtml + '</body>')
    } else {
      html = html + popupHtml
    }

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    })
  }

  const isEuRequest = await isRequestFromEU(request)
  let response = await fetch(request)
  const contentType = response.headers.get('content-type') || ''

  // Add cookie management link for OpenPIMS users on HTML pages
  if ((xOpenpimsHeader || openPIMSUrl) && contentType.includes('text/html')) {
    let cookieConfigUrl

    if (openPIMSUrl) {
      cookieConfigUrl = `${openPIMSUrl}/openpims.json`
    } else {
      cookieConfigUrl = OPENPIMS_CONFIG_URL || `https://${url.hostname}/openpims.json`
    }

    const openpimsLink = `https://openpims.de/?url=${encodeURIComponent(cookieConfigUrl)}`

    let html = await response.text()

    const manageLinkHtml = `
      <div style="position: fixed; bottom: 20px; right: 20px; z-index: 999998; -webkit-transform: translateZ(0);">
        <a href="${openpimsLink}" style="display: inline-flex; align-items: center; gap: 6px; background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow: 0 2px 10px rgba(0,0,0,0.2); transition: background 0.2s; -webkit-tap-highlight-color: transparent;" onmouseover="this.style.background='#0056b3'" onmouseout="this.style.background='#007bff'" ontouchstart="this.style.background='#0056b3'" ontouchend="this.style.background='#007bff'">
          <img src="${OPENPIMS_LOGO_SVG}" alt="OpenPIMS" style="width: 18px; height: 18px;">
          Cookie-Einstellungen
        </a>
      </div>
    `

    if (html.includes('</body>')) {
      html = html.replace('</body>', manageLinkHtml + '</body>')
    } else {
      html = html + manageLinkHtml
    }

    response = new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    })
  }

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