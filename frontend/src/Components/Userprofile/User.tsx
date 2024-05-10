

// TODO: Need an UserService
export default function User(){
    return(
        <>
            <div>
                {/*
                    profile picture
                */}
                <img
                    className="inline-block h-fit w-fit min-h-[15rem] min-w-[15rem] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="user profile picture"
                />
                {/*
                    username/score
                */}
                <div className="inline-block bg-amber-500">
                    <h1 className="text-2xl font-bold">John Doe de marcus the</h1>
                    <p className="p-4">100 ? 10! 3$</p>
                </div>
            </div>
        </>
    )
}