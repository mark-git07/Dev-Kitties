import Search from "./Search";
import Shortlist from "./Shortlist";
import List from "./List";
import Form from "./Form";

import { kitties } from "../data/kitties";

function Main() {
    return (
        <>
            {/* Search & Shortlist */}
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                {/* Search */}
                <Search />
                {/* Shortlist */}
               <Shortlist />
            </div>
            {/* Kitten list */}
            <List kitties={kitties} />
            {/* New Kitten form */}
            <Form />
        </>

    );
}

export default Main;