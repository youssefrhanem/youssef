import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Mic, MicOff, VideoOff, Phone } from "lucide-react";

interface VideoConsultationProps {
  patientName?: string;
  appointmentTime?: string;
  onEndCall?: () => void;
  onToggleVideo?: () => void;
  onToggleAudio?: () => void;
}

const VideoConsultation: React.FC<VideoConsultationProps> = ({
  patientName = "John Doe",
  appointmentTime = "10:00 AM",
  onEndCall = () => {},
  onToggleVideo = () => {},
  onToggleAudio = () => {},
}) => {
  const [isVideoOn, setIsVideoOn] = React.useState(true);
  const [isAudioOn, setIsAudioOn] = React.useState(true);

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div>
            <span>Consultation with {patientName}</span>
            <p className="text-sm text-gray-500">{appointmentTime}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setIsAudioOn(!isAudioOn);
                onToggleAudio();
              }}
            >
              {isAudioOn ? (
                <Mic className="h-4 w-4" />
              ) : (
                <MicOff className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setIsVideoOn(!isVideoOn);
                onToggleVideo();
              }}
            >
              {isVideoOn ? (
                <Video className="h-4 w-4" />
              ) : (
                <VideoOff className="h-4 w-4" />
              )}
            </Button>
            <Button variant="destructive" size="icon" onClick={onEndCall}>
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {/* Video stream would be implemented here */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Video Stream</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoConsultation;
