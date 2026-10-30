import { type Kitty } from "../types";
import { LikeToggle } from "./LikeToggle";

export function List( props : { kitties: Kitty[] } ) {
    return (
        <>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                { props.kitties.map(
                    (kitty) => (
                       <ListCard key={kitty.id} kitty={kitty} />
                    )
                ) }
            </ul>
        </>
    );
}

export default List;

type KittyCardProps = {
    kitty: Kitty
};

function ListCard ({ kitty }: KittyCardProps) {
    return (
        <li
            key={kitty.id}
            className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
        >
            <img
                className="aspect-square object-cover"
                alt={kitty.name}
                src={kitty.imagePath}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{kitty.name}</p>
                    <span className="text-slate-300">·</span>
                    <p className="text-slate-500">{kitty.vibe}</p>
                </div>
                <LikeToggle />
            </div>
        </li>
    );
}