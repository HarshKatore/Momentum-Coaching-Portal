import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

interface TawkToChatProps {
  propertyId: string;
  widgetId: string;
}

export default function TawkToChat({ propertyId, widgetId }: TawkToChatProps) {
  return (
    <TawkMessengerReact
      propertyId={propertyId}
      widgetId={widgetId}
      onLoad={() => {
        console.log("Tawk.to chat loaded successfully");
      }}
    />
  );
}
