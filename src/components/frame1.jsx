import pic from "../assets/lol1.png"

function Frame1() {
    return (
        <div className="frame  w-80 h-80">
            <div className="relative z-0 w-1/4 h-1/4 border-t-[0.5rem] border-l-[0.5rem]  border-[#ff6348ea] top-[-5%] left-[-5%] tl-border"></div>
            <div className="relative z-0 w-1/4 h-1/4 border-t-[0.5rem] border-r-[0.5rem]  border-[#FF6348ea] top-[-30%] right-[-80%] tr-border"></div>
            <div className="relative z-0 w-1/4 h-1/4 border-b-[0.5rem] border-l-[0.5rem]  border-[#FF6348ea] bottom-[-30%] left-[-5%] bl-border"></div>
            <div className="relative z-0 w-1/4 h-1/4 border-b-[0.5rem] border-r-[0.5rem]  border-[#FF6348ea] bottom-[-5%] right-[-80%] br-border"></div>
            <div className="pic relative mb-[-60%] w-[140%] h-[140%] top-[-140%] left-[-20%] ">

            </div>
        </div>
    );
}

export default Frame1