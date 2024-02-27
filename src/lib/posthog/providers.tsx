// app/providers.tsx
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false // Disable automatic pageview capture, as we capture manually
    })
}

export function PHProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (pathname) {
            let url = window.origin + pathname
            if (searchParams.toString()) {
                url += '?' + searchParams.toString()
            }
            posthog.capture('$pageview', { '$current_url': url })
        }

        // posthog.capture('$pageview', {
        //     $current_url: window.location.href,
        //     $host: window.location.host,
        //     $pathname: pathname,
        //     $search: searchParams.toString(),
        // })
    }, [pathname, searchParams])

    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}