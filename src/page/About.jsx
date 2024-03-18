import React from 'react'
import { Users} from "lucide-react";

export const About = () => {
  return (
    <div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Team
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Our team comprises of three talented individuals from Addis Ababa
              Science and Technology University. First, we have Fikiru Demlew,
              who acts as our Team Leader. Next, we have Yohana Mekuria, who is
              a Full-Stack Developer. Finally, we have Yohannes Tigistu, another
              Full-Stack Developer. Yohannes shares responsibility with Yohana
              in developing and maintaining our software applications. We are
              confident that our team has the skills and expertise needed to
              deliver exceptional results. Please let us know how we can assist
              you further.
            </p>
          </div>

          <ul
            role="list"
            class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div class="flex items-center gap-x-6">
                <Users class="h-16 w-16 rounded-full" alt="person" />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    CineSphere
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    Team-4 / GDSC
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-7">
                <div className=" flex gap-10 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  <Users class="h-16 w-16 rounded-full" alt="person" />
                  Contact Links
                </div>

                <p className="text-md font-sans font-medium leading-6 text-indigo-600">
                  <a
                    href="https://github.com/FikruDemlew"
                    target="blank"
                    className="hover:decoration-slice"
                  >
                    Fekru Demlew : Git-hub
                  </a>
                </p>
                <p className="text-md font-sans font-medium leading-6 text-indigo-600">
                  <a href=" https://github.com/Yohanamtesfaye" target="blank">
                    Yohanna Mekuria : Git-Hub
                  </a>
                </p>
                <p className="text-md font-sans font-medium leading-6 text-indigo-600">
                  <a href=" https://github.com/Yohannes-Tigistu" target="blank">
                    Yohannes Tigistu : Git-Hub
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
