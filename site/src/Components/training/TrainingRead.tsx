import VideoPlayer from "./VideoPlayer.tsx";
import Navbar from "../navbar/Navbar.tsx";
import {NavService} from "../../services/NavigationService.ts";
import {useLocation} from "react-router-dom";
import {IMistake} from "../../model/backend/IMistake.ts";
import ReadTrainingAttachment from "./training-read/ReadTrainingAttachment.tsx";
import ImgPlaceholder from "./training-read/ImgPlaceholder.tsx";
import {useEffect, useState} from "react";
import {navigate} from "../../model/Utils.ts";
import ToolTip from "./training-read/ToolTip.tsx";

const mistakes: IMistake[] = [
    {
        taskId: "task1",
        mistakeId: "mistake1",
        mistake: "Mistake 1",
        solution: "wir",
        userId: "user1",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        taskId: "task2",
        mistakeId: "mistake2",
        mistake: "Mistake 2",
        solution: "ich",
        userId: "user2",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        taskId: "task3",
        mistakeId: "mistake3",
        mistake: "Mistake 3",
        solution: "tschüss",
        userId: "user3",
        created_at: new Date(),
        updated_at: new Date()
    }
];
const preparedTaskVideos = [
    "https://media.spreadthesign.com/video/mp4/22/232422.mp4",
    "https://media.spreadthesign.com/video/mp4/22/135514.mp4",
    "https://media.spreadthesign.com/video/mp4/22/139918.mp4"
]

function TrainingRead(){
    NavService.changeNavHighlight(useLocation().pathname);

    const [currentVid, setCurrentVid] = useState<string>('');
    const [taskVideos, setTaskVideos] = useState<string[]>([] as string[]);
    const [currentMistake, setCurrentMistake] = useState<IMistake>(mistakes[0])
    useEffect(() => {

        /*setTaskVideos(mistakes.map((mistake) => {
            //fetchRestEndpoint()
            console.log(mistake);
            return 'https://media.spreadthesign.com/video/mp4/22/232422.mp4';
        }))
         */
        // todo: with the stored taskId get the task, in the task is the video path, set that
        // or get all the tasks instantly, and set it
        setTaskVideos(preparedTaskVideos);
        setCurrentVid('https://media.spreadthesign.com/video/mp4/22/232422.mp4');
    }, []);

    const changeVideo = () => {

        const index = taskVideos.indexOf(currentVid);
        const mistakeIndex = mistakes.indexOf(currentMistake);

        const newVideo =  taskVideos[index + 1];
        const newMistake = mistakes[mistakeIndex + 1];
        console.log(newVideo);
        if (newVideo && newMistake) {
            setCurrentVid(newVideo);
            setCurrentMistake(newMistake);
        } else {
            navigate('/training');
        }
    }
    return (
        <div className="h-screen bg-bg-primary justify-center min-h-screen">
            <Navbar/>
            <div className="grid grid-cols-2 w-full m-4 mt-10 p-10">

                <div className="flex flex-col items-center justify-center bg-gray-800 rounded-3xl">
                    <h2 className="w-1/2 text-white p-2 rounded text-center">Train on your
                        mistakes! <ToolTip mistake={currentMistake}/>
                    </h2>

                    {currentVid && <VideoPlayer videoPath={currentVid}/>}
                    <div className="w-1/2">
                        {currentMistake ? <ReadTrainingAttachment changeVideo={changeVideo} mistake={currentMistake}/> : null}
                    </div>
                </div>
                <div className="h-full flex justify-center">
                    <ImgPlaceholder/>
                </div>
            </div>
        </div>
    )
}


export default TrainingRead;