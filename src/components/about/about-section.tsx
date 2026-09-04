import Image from "next/image"

export function AboutSection() {
    return (
        <section
            id="about"
            className="mx-4 mt-0 md:mt-5 md:mx-5 relative overflow-hidden bg-[#f6f6f6] py-10 md:py-20 scroll-mt-12"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-[0.07] md:block">
                <Image
                    src="/logos/bricsed-mark.png"
                    alt=""
                    width={2000}
                    height={2000}
                    className="h-auto w-full"
                />
            </div>

            <div className="mx-auto relative flex items-center justify-around flex-col md:flex-row">
                <div className="flex flex-col text-center md:text-left">
                    <h2 className="font-primary italic font-medium leading-none text-gradient-blue text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                        About
                    </h2>

                    <p className=" font-primary italic font-medium leading-none text-[#11990A] text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                        BRICSED 2027
                    </p>
                </div>

                <div className="max-w-2xl mt-4 md:mt-0">
                    <div className="max-w-full md:max-lg:max-w-100 flex flex-col gap-5">
                        <p className="text-[14px] text-bricsed-navy text-justify leading-5 md:leading-6 sm:text-lg md:text-[16px] indent-8">
                            The 1st Brawijaya International Conference on Sustainability, Energy, and Development (BRICSED) 2027 is an international scientific conference and student paper competition held by the International Relations Study Program of Universitas Brawijaya and supported by Japan Foundation Jakarta. With the main theme of “Energy, Equity, and Earth: People at the Heart of Sustainable Futures”, the event focuses on expanding academic dialogue and global collaboration on the topics of energy, sustainability, and development. The conference addresses the need for stronger academic networks and research-based collaboration among Indonesian and Japanese universities, while also engaging experts from Southeast Asia and Japan to provide global perspectives. 
                        </p>
                        <p className="text-[14px] text-bricsed-navy text-justify leading-5 md:leading-6 sm:text-lg md:text-[16px] indent-8">
                            1st BRICSED 2027 will consist of two main events: a paper competition and an academic conference. The paper competition will provide a platform for undergraduate students to present academic papers on Indonesia-Japan cooperation related to the main theme. The academic conference will bring together university students, academia, researchers, practitioners, institutional representatives, and other experts to discuss past and present challenges and offer evidence-based solutions through rigorous research, paper presentation, and panel discussions among the participants. Expected outputs include selected articles published on reputable journals and proceedings, conference documentation, and an Indonesia–Japan academic network.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}