/* "use client"
import { useGlobalContext } from "@/app/store";

import { useFavoriteQuery } from "./useShortsAndPostsQuery";


export const usePublicated = (postUserId?: string) => {
    
    const { userCook } = useGlobalContext();
    const cookId = userCook ? userCook?.videos.join(",") : "";
    const resultIdPost = postUserId ? postUserId : cookId 

    const {data: publicate} = useFavoriteQuery(resultIdPost, 'getMyPublication')
    
    return publicate
}
 */