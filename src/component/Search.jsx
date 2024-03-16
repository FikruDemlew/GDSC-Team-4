import React from 'react'

export const Search = () => {
  return (
    <div>
        <div class="flex flex-col gap-4 justify-center items-center p-4 my-8 mt-16 ">

<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
    McqMate Search
</h1>

<div class="relative p-2 border border-gray-200 rounded-lg w-full max-w-lg">
    <input type="text" class="rounded-full p-3 w-full" placeholder="Search MCQ | Topic | Course"/>

    <button type="submit" class="absolute right-6 top-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
    </button>

</div>
</div>
    </div>
  )
}
