import React from 'react'
import circle from "../../assets/Circle.svg";
import greenline from "../../assets/greenLine.svg";
import ReactPlayer from "react-player"

const Beginner = () => {
    return (
        <div>

            <div className="bg-gradient-to-tr from-pink-200 to-blue-200">
                {/* <div>
        <LiveWave title={"LECTURE SERIES"} position={"right-12"} />
      </div> */}

                <div className="row grid lg:grid-cols-11">
                    <div className="lg:col-span-5">

                    </div>
                    <div className="lg:col-span-1 lg:block hidden">
                        <div className="row mt-8">
                            <img src={circle} className="absolute" alt="" />
                        </div>
                        <div className="row">
                            <img src={greenline} className="pl-5" alt="" />
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="row">
                            <div className="lg:pl-0 pl-4">
                                {/* <p className="text-3xl">13TH OCT</p> */}
                                <p className="text-[#029090] mt-5 text-3xl">STOCKS</p>
                                <p className="pe-2 mr-4 text-justify text-base mt-2 ">
                                    It is a fixed income security which allows a lender to lend a
                                    predetermined amount of funds and be eligible for intrest on those funds
                                </p>
                                <p className="pe-2 mr-4 text-justify text-base mt-2 ">
                                    Second, the lectures provide an opportunity for junior students to learn about the latest developments and advancements in AI. This knowledge will be valuable for them as they begin to study the subject in more depth in their later years.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8">
                    <div className="col-span-5">
                        <div className="row">
                            {/* <p className="text-3xl text-right lg:pr-20 mr-4"></p> */}
                            <p className="text-[#029090] mt-5 text-4xl text-right lg:pr-20 mr-4">BONDS</p>
                            <p className="pl-2 ml-4 text-justify text-base mt-4 lg:pr-20 mr-4">
                                Third, the lectures also provide an opportunity for the junior students to network and connect with upperclassmen and industry professionals who are involved in the field of AI.This can help them gain valuable insights and advice as they continue to pursue their interests in the field.

                            </p>
                            <p className="pl-2 ml-4 text-justify text-base mt-4 lg:pr-20 mr-4">
                                Fourth, the lectures help junior students to develop their problem-solving skills, creativity and critical thinking by providing them with hands-on experience and exposure to real-world AI projects.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-1 lg:block hidden">
                        <div className="row">
                            <img src={circle} className="absolute" alt="" />
                        </div>
                        <div className="row">
                            <img src={greenline} className="pl-5 mt-9" alt="" />
                        </div>
                    </div>
                    <div className="ml-16 hidden lg:block">
                        <ReactPlayer width={400} height={200}
                            url="https://www.youtube.com/watch?v=nMLVn_n1hb8"
                        />
                    </div>

                </div>

                <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8">
                    <div className="col-span-5 w-5 ">
                        <div className="ml-16 hidden lg:block">
                            <ReactPlayer width={400} height={200}
                                url="https://www.youtube.com/watch?v=nMLVn_n1hb8"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-1 lg:block hidden">
                        <div className="row">
                            <img src={circle} className="absolute" alt="" />
                        </div>
                        <div className="row">
                            <img src={greenline} className="pl-5" alt="" />
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="row">
                            <div className="lg:pl-0 pl-4">
                                {/* <p className="text-3xl">18TH OCT</p> */}
                                <p className="text-[#029090] mt-5 text-4xl">GOLD</p>
                                <p className="pe-2 mr-4 text-sm mt-2 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                                    perspiciatis tempore ad laboriosam dolorem quidem velit possimus,
                                    quasi consequuntur rem alias aperiam, minus officiis sit accusamus
                                    porro, dignissimos libero nulla?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8 lg:pb-0 pb-8">
                    <div className="col-span-5">
                        <div className="row">
                            {/* <p className="text-3xl text-right lg:pr-20 mr-4">15TH OCT</p> */}
                            <p className="text-[#029090] mt-5 text-4xl text-right lg:pr-20 mr-4">FIXED DEPOSITS</p>
                            <p className="pl-2 ml-4 text-right text-sm mt-4 lg:pr-20 mr-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                                perspiciatis tempore ad laboriosam dolorem quidem velit possimus,
                                quasi consequuntur rem alias aperiam, minus officiis sit accusamus
                                porro, dignissimos libero nulla?
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-1 lg:block hidden">
                        <div className="row">
                            <img src={circle} className="absolute" alt="" />
                        </div>
                        <div className="row">
                            <img src={greenline} className="pl-5" alt="" />
                        </div>
                    </div>
                    <div className="ml-16 hidden lg:block">
                        <ReactPlayer width={400} height={200}
                            url="https://www.youtube.com/watch?v=nMLVn_n1hb8"
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Beginner
