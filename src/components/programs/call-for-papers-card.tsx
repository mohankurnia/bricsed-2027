/* eslint-disable @next/next/no-img-element */
import { FilePenLine } from "lucide-react"

import { callForPapers } from "@/data/programs"

export function CallForPapersCard() {
    return (
        <article data-aos="zoom-in" data-aos-delay="200" className="flex max-w-127.75 w-full flex-col overflow-hidden rounded-[20px] border border-white bg-white shadow-[0_20px_40px_rgba(0,20,60,0.16)]">
            <div className="flex min-h-20 sm:min-h-24 items-center justify-center md:justify-normal gap-2 md:gap-5 bricsed-gradient px-2 md:px-7 text-white shadow-[inset_0px_8px_60px_rgba(0,0,0,.3)]">
                <FilePenLine
                    className="size-10 sm:size-12 shrink-0 hidden sm:block"
                    strokeWidth={1.8}
                />

                <h3 className="font-primary text-xl sm:text-2xl lg:text-3xl leading-none text-center sm:text-left">
                    {callForPapers.title}
                </h3>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5 md:p-7">
                <p className="text-[14px] md:text-[15px] text-justify md:leading-5 text-[#061630]">
                    {callForPapers.description}
                </p>

                {/* Objectives */}
                <div>
                    <h4 className="flex items-center gap-2 text-[15px] md:text-[17px] font-bold leading-none text-[#063fe9]">
                        <span className="size-2.5 shrink-0 rounded-full bg-[#0aa31a]" />
                        Paper Competition Format
                    </h4>

                    <div className="flex flex-col gap-2 ml-5 mt-2">
                        <p className="mt-2 text-2xl lg:text-3xl font-bold leading-[1.08] text-[#061630]">
                            {callForPapers.papersFormat}
                        </p>

                        <div className="flex items-center gap-2 border border-[#e2e2e2] py-3 px-3 rounded-md transition hover:bg-[#f5f5f5] cursor-pointer">
                            <img 
                                src="/zoom.png" 
                                alt="Location"
                                className="size-4.5 shrink-0"
                            />
                            <p className="text-[12px] md:text-[15px] leading-[1.08] text-[#061630]">
                                {callForPapers.papersOnline}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom information */}
                <div>

                {/* Conference Format */}
                    <div className="flex flex-col gap-2 mt-2">
                        <h4 className="flex items-center gap-2 text-[15px] md:text-[17px] font-bold leading-none text-[#063fe9]">
                            <span className="size-2.5 shrink-0 rounded-full bg-[#0aa31a]" />
                            Date
                        </h4>

                        <p className="mt-2 ml-5 text-xl lg:text-3xl font-bold leading-[1.08] text-[#061630]">
                            {callForPapers.date}
                        </p>
                    </div>
                    {/* Guideline */}
                    <div className="flex flex-col gap-2 my-4">
                        <h4 className="flex items-center gap-2 text-[15px] md:text-[17px] font-bold leading-none text-[#063fe9]">
                            <span className="size-2.5 shrink-0 rounded-full bg-[#0aa31a]" />
                            Guidelines
                        </h4>

                        <a 
                            // href={`${callForPapers.guidelines}`} 
                            target='_blank'
                            className="flex items-center mt-2 ml-5 w-fit gap-2 border border-[#e2e2e2] py-3 px-3 rounded-md transition hover:bg-[#f5f5f5] cursor-pointer button-disabled">
                            <img 
                                src="/guideline.png" 
                                alt="Guideline"
                                className="size-4.5 shrink-0"
                            />
                            <p className="text-[12px] md:text-[15px] leading-[1.08] text-[#061630]">
                                View More
                            </p>
                        </a>
                    </div>
                </div>

                {/* CTA */}
                <a
                    // href={callForPapers.registration_link}
                    target="_blank"
                    className="mt-auto flex content-end min-h-14.5 items-center justify-center rounded-full text-xl font-bold bricsed-gradient px-7 text-white shadow-[inset_0px_8px_60px_rgba(0,0,0,.3)] transition-transform hover:scale-[1.01] button-disabled"
                >
                    To be Announced
                </a>
            </div>
        </article>
    )
}