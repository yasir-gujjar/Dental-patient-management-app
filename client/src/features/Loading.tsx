import "./css/index.css"

const Loading = () => {
    return (
        <>
            <div className="loading-background">
                <div className="loading-box">

                    <div className="ring">
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 50 50"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                strokeWidth="5"
                                stroke="#007bff"
                                strokeLinecap="round"
                            >
                                <animate
                                    attributeName="r"
                                    begin="0s"
                                    dur="1.8s"
                                    values="20;10;20"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="stroke-color"
                                    begin="0s"
                                    dur="1.8s"
                                    values="#007bff;#0056b3;#007bff"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                />
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 25 25"
                                    to="360 25 25"
                                    dur="1.8s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </svg>
                        <br />
                        <br />

                        <b className="loading-text">Loading...</b>


                    </div>

                </div>
            </div >

        </>
    )
}

export default Loading
