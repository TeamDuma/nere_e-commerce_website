import { PostHog } from 'posthog-node';

export default function PostHogClient() {
  if (process.env.NODE_ENV !== 'development') {
    const postHogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    });
    return postHogClient;
  }
  return null;
}

interface IdentifyMessage {
  distinctId: string;
  properties?: Record<string | number, any>;
  disableGeoip?: boolean;
}
interface EventMessage extends IdentifyMessage {
  event: string;
  groups?: Record<string, string | number>;
  sendFeatureFlags?: boolean;
  timestamp?: Date;
  uuid?: string;
}

export const isProduction = process.env.NODE_ENV === 'production';

const postHogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});

export const posthogCapture = (props: EventMessage) => {
  if (!isProduction) {
    postHogClient.capture({ ...props });
  }
};
