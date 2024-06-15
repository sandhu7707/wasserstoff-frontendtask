import { useCallback, useEffect, useState } from "react"

export default function Cards ({cards, focusable}: {cards: any[], focusable: boolean}) {

    const [focusedIndex, setFocusedIndex] = useState(0);

    const scrollToCard = useCallback(() => {
        let cardsContainer = document.getElementById("cards-container")
        const card = document.getElementById(`card-${focusedIndex}`)
        setFocusedIndex((focusedIndex + 1)%cards.length)
        console.log(focusedIndex)
        card?.focus({preventScroll: true})
        console.log("focus")
        let cardBoundingRect = card?.getBoundingClientRect()
        let cardsContainerBoundingRect = cardsContainer?.getBoundingClientRect()
        if(cardsContainerBoundingRect && cardBoundingRect){
            let x = (cardBoundingRect.x + cardBoundingRect.width/2) - (cardsContainerBoundingRect.x + cardsContainerBoundingRect.width/2)
            cardsContainer?.scrollTo(cardsContainer.scrollLeft + x, 0)
        }
    }, [focusedIndex, cards.length])

    const scrollOnClick = (id: string) => {
        console.log("clicked on", id)
        let collectibleContainer = document.getElementById("cards-container")
        let collectible = document.getElementById(id)
        collectible?.focus({preventScroll: true})
        if(!collectibleContainer?.getBoundingClientRect() || !collectible?.getBoundingClientRect()){
            return;
        }
        const x = collectible.getBoundingClientRect().x + collectible.getBoundingClientRect().width/2 - (collectibleContainer?.getBoundingClientRect().x + collectibleContainer?.getBoundingClientRect().width/2)
        collectibleContainer.scrollTo(collectibleContainer.scrollLeft + x, 0)
    }

    useEffect(() => {
        console.log("Started")
        const interval = setInterval(scrollToCard, 2000)

        return () => clearInterval(interval)
    }, [scrollToCard])

    return (
        <div className="z-20 w-full flex flex-col w-full max-w-[100vh] md:max-w-none">
            <div id="cards-container" className="mt-40 my-20 flex flex-row w-full scrollbar-width-none overflow-scroll scroll-smooth" onLoad={() => scrollToCard(0)}>
                <div className="w-[300px] h-full  grow-0 shrink-0 pt-12"></div>
                    {cards.map((x: any, i) => (
                        <div key={i} tabIndex={i} id={`card-${i}`} onClick={() => scrollOnClick(`card-${i}`)} className={`${focusable ? "opacity-75" : ""} focus:opacity-100 focus:scale-105 focus-visible:outline-0 duration-500 focus:duration-500 h-full grow-0 shrink-0 w-[400px] mr-10`}>
                            {x}    
                        </div>
                    ))}
                <div className="w-[300px] h-full  grow-0 shrink-0 "></div>
            </div>
        </div>    
    )
}