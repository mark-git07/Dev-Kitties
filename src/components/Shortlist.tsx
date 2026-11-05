import type { Dispatch, SetStateAction } from "react";
import { Heart } from "lucide-react";
import { ShortlistCard } from "./ShortlistCard";
import { type Kitty } from "../types";

function Shortlist({ 
    kitties,
    liked,
    setLiked
    } : {
        kitties: Kitty[],
        liked: Kitty["id"][],
        setLiked: Dispatch<SetStateAction<Kitty["id"][]>> 
    }) {

    const isLiked = kitties.filter(
        kitty => liked.includes(kitty.id)
    );

    return (
        <>
            <div>
                <h2 className="flex items-center gap-2 font-medium">
                    <span>Your shortlist</span>
                    <Heart className="fill-pink-500 stroke-none" />
                </h2>
                <ul className="mt-4 flex flex-wrap gap-4">
                    { isLiked.map( 
                        (kitty) => (<ShortlistCard id={kitty.id} kitty={kitty} liked={liked} setLiked={setLiked} />) 
                    )}
                </ul>
                </div>
        </>
    );
}

export default Shortlist;