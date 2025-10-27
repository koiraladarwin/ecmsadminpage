import useSession from "../../../../hooks/Use-session-list";
import { OrbitProgress } from "react-loading-indicators";
import SessionAll from "./SessionsAll";
import Session from "./SessionPage";

export default function SessionPg() {
    const { data: sessions, isLoading } = useSession();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <OrbitProgress variant="split-disc"
                dense color="#800080" 
                size="large" />
            </div>
        );
    }

    if (!sessions || sessions.length === 0) {
        return <Session />;
    }

    return <SessionAll />;
}
