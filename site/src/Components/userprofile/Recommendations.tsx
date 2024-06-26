import {IFriend} from "../../model/props.ts";
import {friendService} from "../../services/FriendService.ts";

interface IProps {
    // TODO: Define your props here
}
let sug:IFriend[];
(async () => {
    sug = await friendService.getSuggestions();
})();
export function Recommendations(props: IProps) {
    console.log("Recommendations props", props);
    
    return (
        <div className="flex flex-col w-full  bg-bg-secondary rounded-3xl p-7">
            <h1 className="text-xl font-bold mb-5 text-center">Friend suggestions</h1>
            <ul>
                {sug.map((friends: IFriend) => (
                    <li key={friends.friendID}
                        className="text-gray-300 flex justify-between items-center mb-7">
                        <div className="flex items-center">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50 mr-7"
                                 src={friends.profilePath ? friends.profilePath : undefined}
                                 alt=""/> {/*TODO: add alt text + change profile picture to default image*/}
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm leading-6 font-bold">{friends.name}</p>
                            </div>
                        </div>
                        <button className="bg-primary text-text-primary font-bold h-fit flex items-center p-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"
                                 className="bi bi-person-plus-fill mr-2" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                <path fillRule="evenodd"
                                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};