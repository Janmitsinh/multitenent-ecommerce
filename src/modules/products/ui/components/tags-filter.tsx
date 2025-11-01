import { Checkbox } from "@/components/ui/checkbox";
import { DEFAULT_LIMIT } from "@/constants";
import { useTRPC } from "@/trpc/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { LoaderIcon } from "lucide-react";

interface Props {
    value?: string[] | null;
    onChange: (value:string[]) => void;
}

export const TagsFilter = ({ value, onChange }:Props) => {
    const trpc = useTRPC();
    
    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(trpc.tags.getMany.infiniteQueryOptions(
        {
            limit: DEFAULT_LIMIT,
        },
        {
            getNextPageParam: (lastPage) => {
                return lastPage.docs.length > 0 ? lastPage.nextPage : undefined;
            }
        }
    ));

    /* This code snippet defines a function onClick that handles the addition or removal of a tag from a list of selected tags.If the tag is already in the list (value?.includes(tag)), it removes the tag by filtering it out. If the tag is not in the list, it adds the tag to the list by creating a new array with the tag appended.The updated list is then passed to the onChange function, which is expected to handle the new list of selected tags. */
    const onClick = (tag: string) => {
        if(value?.includes(tag)) {
            onChange(value?.filter((t) => t !== tag) || []);
        } else {
            onChange([...(value || []), tag]);
        }
    };

    return (
        <div className="flex flex-col gap-y-2">
            {isLoading ? (
                <div className="flex items-center justify-center p-4">
                    <LoaderIcon className="size-4 animate-spin" />
                </div>
            ): (
                data?.pages.map((page) => 
                    page.docs.map((tag) => (
                        <div
                            key={tag.id}
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => onClick(tag.name)}
                        >
                            <p className="font-medium">{tag.name}</p>
                            <Checkbox 
                                checked={value?.includes(tag.name)}
                                onCheckedChange={() => onClick(tag.name)}
                            />
                        </div>
                    ))
                )
            )}
            {hasNextPage  && (
                <button 
                    disabled={isFetchingNextPage}
                    onClick={() => fetchNextPage()}
                    className="underline font-medium justify-start text-start disabled:opacity-50 cursor-pointer"
                >
                    Load more...
                </button>
            )}
        </div>
    )
}