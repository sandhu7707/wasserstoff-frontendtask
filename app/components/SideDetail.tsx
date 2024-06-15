import Image from "next/image"

export default function SideDetail ({view}: {view: string}) {

    const isEventsView = view === 'events'
    const isCollectionsView = view === 'collections'
    return (
        <div className="ml-[10%] h-full flex flex-col justify-between">
                <section>
                    <div className="text-4xl mt-20 font-semibold">
                        {isEventsView && <><h1>Explore Your First</h1><h1>Event</h1></>}
                        {isCollectionsView && <><h1>Explore Your First</h1><h1>Collectible</h1></>}
                    </div>
                </section>
                <section>
                    {isEventsView && <h1 className="text-6xl font-bold">Event Name</h1>}
                    {isCollectionsView && 
                        <> 
                            <h1 className="text-6xl font-bold">Meta</h1>
                            <h1 className="text-6xl font-bold">Lives</h1>
                        </>
                    }
                    <div className="mt-4">
                        <div className="inline text-2xl font-semibold">
                            {isEventsView && <h1><span className="mr-8"><Image className="inline mr-2" width="32" height='32' src="location.svg" alt=""/>Venue</span>
                            <span><Image className="inline m4-2" width="32" height='32' src="alarm.svg" alt=""/> 04/03/2024@19:00</span></h1>}
                            {isCollectionsView && "Live in Astrix"}
                        </div>
                    </div>
                    <p className="text-2xl my-12 font-semibold">Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pallentesque mattis condimentum ut nulla.</p>
                    {isEventsView && <section>
                        <h1 className="text-3xl my-8">Artist Lineup</h1>
                        <div className="flex w-full items-center justify-center">
                            <div className="h-[150px] grow-0 shrink-0 w-[150px] rounded-3xl rounded-r-none">
                                <Image className="rounded-3xl rounded-r-none" width='150' height='150' src="https://picsum.photos/seed/dfsdsf/150/150" alt=""></Image>
                            </div>
                            <div className="h-[225px] grow-0 shrink-0 w-[200px] rounded-3xl">
                                <Image className="rounded-3xl" width='200' height='225' src="https://picsum.photos/seed/sdas/200/225" alt=""></Image>
                            </div>
                            <div className="h-[150px] grow-0 shrink-0 w-[150px] rounded-3xl rounded-l-none">
                                <Image className="rounded-3xl rounded-l-none" width='150' height='150' src="https://picsum.photos/seed/qwe/150/150" alt=""></Image>
                            </div>
                        </div>
                    </section>
                    }
                    {isCollectionsView && <>
                        <div className="flex text-2xl font-semibold">
                            <div className="w-[40px] h-[40px] rounded-[40px] border-solid border-2 bg-slate-400"></div>
                            <div className="w-[40px] h-[40px] rounded-[40px] border-solid border-2 bg-slate-500 relative -left-[10px]"></div>
                            <div className="w-[40px] h-[40px] rounded-[40px] border-solid border-2 bg-slate-600 relative -left-[20px]"></div>
                            <div className="w-[40px] h-[40px] rounded-[40px] border-solid border-2 bg-slate-700 relative -left-[30px]"></div>
                            <div className="w-[40px] h-[40px] rounded-[40px] border-solid border-2 bg-slate-800 relative -left-[40px]"></div>
                            <span>22k people interested</span>
                        </div>
                        <section>
                            <h1 className="text-lg ">Collectibles</h1>
                            <div id="collectiblesContainer" className="flex w-full overflow-scroll scrollbar-width-none scroll-smooth">
                                {new Array(3).fill(0).map((x,i) => (
                                    <div key={i} className={`h-[30%] grow-0 shrink-0 mr-[20px] focus:border-red-950`} id={`collectible-${i}`}>
                                        <Image className="rounded-lg" width='150' height='200' src="https://picsum.photos/seed/fsa/150/200" alt=""></Image>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                }
                </section>
            <section className="w-[90%] flex flex-row items-end">
                {isEventsView && <Image className="rounded-lg mr-auto float-left" width='100' height='100' src="https://picsum.photos/seed/picsum/100/100" alt=""></Image>}
                <div className="grow">
                    <button className="float-right mt-auto rounded-full bg-[#FFCA5F] px-10 text-black font-bold text-3xl h-12">Join Waitlist</button>
                </div>
            </section>
        </div>
    )
}