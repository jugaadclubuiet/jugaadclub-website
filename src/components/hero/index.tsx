import Image from "next/image";

const HeroSection = () => {
  	return (
		<div className="w-full relative bg-gray-200 h-[27.125rem] flex flex-col items-center justify-center gap-[6rem_0rem] text-center text-[5.125rem] text-white font-judson my-20 ">
			<div className="w-[60.313rem] relative tracking-[0.06em] leading-[120.31%] flex items-center h-[12.063rem] shrink-0 [text-shadow:5px_0_0_#000,_0_5px_0_#000,_-5px_0_0_#000,_0_-5px_0_#000] z-[0]">
				<span className="w-full">
					<p className="[margin-block-start:0] [margin-block-end:44px]">
						<b>JUGAAD</b>
					</p>
					<p className="m-0 text-[2.813rem] font-inter">
						<b>The Robotics Club of UIET</b>                           
					</p>
				</span>
			</div>
			<div className="w-[78.25rem] flex flex-row items-center justify-center gap-[0rem_3rem] z-[1] text-left text-[2.375rem] font-kaisei-opti">
				<b className="w-[16.938rem] relative tracking-[0.13em] leading-[120.31%] flex items-center h-[7.688rem] shrink-0 [text-shadow:7px_0_0_#302f2a]">Frugal</b>
				<Image className="w-[1.3rem]  h-[1.3rem] overflow-hidden shrink-0 z-[2]" alt="" src="/circle.png" width="80" height="80"/>
				<b className="w-[25rem] relative tracking-[0.13em] leading-[120.31%] flex items-center h-[7.438rem] shrink-0 [text-shadow:7px_0_0_#302f2a]">Inclusive</b>
				<Image className="w-[1.3rem]  h-[1.3rem] overflow-hidden shrink-0 z-[3]" alt="" src="/circle.png " width="80" height="80"/>
				<b className="w-[22.063rem] relative tracking-[0.13em] leading-[120.31%] flex text-center items-center justify-center h-[7.438rem] shrink-0 [text-shadow:7px_0_0_#302f2a]">Flexible</b>
			</div>
		</div>
		);
};

export default HeroSection;
