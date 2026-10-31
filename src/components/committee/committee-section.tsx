import { projectManagers, scientificCommittees } from "@/data/committee"

export function CommitteeSection() {
    return (
        <section className="bg-[#f6f6f6] py-10">
            <div className="mx-auto container px-3">
                <h2 data-aos="fade-up" className="font-primary text-center font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic text-gradient-blue leading-none">
                    Committee
                </h2>

                {/* <div className="mt-5 mx-0 xl:mx-40 flex flex-col sm:grid py-4 px-4 md:px-8 gap-5 md:gap-10 lg:gap-20 items-center sm:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr]">
                  <div className="w-fit sm:w-full flex flex-row gap-2 sm:gap-0 sm:flex-col items-center sm:items-start text-center sm:text-left">
                    <p data-aos="fade-right" className="w-fit sm:w-full font-primary italic font-medium leading-tight text-gradient-blue text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Project
                    </p>

                    <p data-aos="fade-right" data-aos-delay="100" className="w-fit sm:w-full font-primary italic font-medium leading-none text-[#11990A] text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Manager
                    </p>
                  </div>

                  {projectManagers.map((projectManager) => (
                    <p 
                      key={`${projectManager.id}`}
                      data-aos="fade-up" 
                      className="text-center sm:text-left text-xl md:text-2xl lg:text-3xl font-bold text-[#001431]">
                      {projectManager.name}
                    </p>
                  ))}
                </div> */}

                <div className="mt-5 mx-0 xl:mx-40 flex flex-col sm:grid py-4 px-4 md:px-8 gap-5 md:gap-10 lg:gap-20 items-center sm:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr]">
                  <div className="w-fit sm:w-full sm:mb-auto flex flex-row gap-2 sm:gap-0 sm:flex-col items-center sm:items-start text-center sm:text-left">
                    <p data-aos="fade-right" className="w-fit sm:w-full font-primary italic font-medium leading-tight text-gradient-blue text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Committee &
                    </p>

                    <p data-aos="fade-right" data-aos-delay="100" className="w-fit sm:w-full font-primary italic font-medium leading-none text-[#11990A] text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Panelists
                    </p>
                  </div>

                  <div className="flex flex-col">
                    {scientificCommittees.map((scientificCommittee, index) => (
                      <p 
                        key={`${scientificCommittee.id}`}
                        data-aos="fade-up" 
                        className={[
                          "py-5 text-center sm:text-left text-xl md:text-2xl lg:text-3xl font-bold text-[#001431]",
                          index !== scientificCommittees.length - 1
                          ? "border-b border-[#001431]/30"
                          : "",
                        ].join(" ")}
                      >
                        {scientificCommittee.name}
                      </p>
                    ))}
                  </div>
                </div>
            </div>
        </section>
    )
}