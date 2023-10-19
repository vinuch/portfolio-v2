import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

interface JobSummaryProps {
    item: any;
}
function JobSummary({ item }: JobSummaryProps) {
    const [isOpen, setisOpen] = useState(false)

    return (
        <li className="relative" key={`${item.company}-${item.period}`}>
            {/* <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" /> */}
            <div className="h- mt-8 y- border-2 border-gray2 py-3 px-4 rounded-md">
                <div className="flex justify-between items-center">
                    <div className="">
                        <h2 className="text-lg font-extrabold mb-2">{item.company} </h2>
                        <h3 className="text-base font-extrabold mb-2">{item.role}</h3>
                    </div>

                    {item.summary && <div className="cursor-pointer" onClick={() => setisOpen(!isOpen)}>{isOpen ? <ChevronUp color="white" size={24} /> : <ChevronDown color="white" size={24} />}</div>}
                </div>

                {(item.summary && isOpen) && <p className="text-gray-300 font-light my-3">{item.summary}</p>}

                <span className="text-sm">{item.period}</span>
            </div>
        </li>
    )
}

export default JobSummary