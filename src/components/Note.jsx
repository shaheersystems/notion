import {
  DrawingPinIcon,
  DrawingPinFilledIcon,
  DotsVerticalIcon,
  StarIcon,
  Pencil1Icon,
  TrashIcon,
  MixIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { togglePinned } from "../store/notes";
import { useDispatch } from "react-redux";
function Note({ id, title, description, rawDate, pinned, starred }) {
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    function formatDate(dateString) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const parts = dateString.split("/");
      console.log(parts);
      const monthIndex = Number(parts[0]) - 1;
      console.log(monthIndex);
      const month = months[monthIndex];
      console.log(month);
      const day = parseInt(parts[1]);
      const year = parts[2];
      return `${month} ${day}, ${year}`;
    }
    setDate(formatDate(rawDate));
  }, []);
  return (
    <Link to='/'>
      <div className='hover:shadow-md hover:bg-yellow-100 transition group bg-neutral-100 p-2 w-64 max-h-fit rounded-lg'>
        <div className='px-2 py-2 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <FileTextIcon height={20} width={20} />
            <h1 className='font-title text-lg'>{title}</h1>
          </div>
          <button
            onClick={() => dispatch(togglePinned({ id }))}
            className='invisible group-hover:visible p-1 rounded hover:bg-neutral-200'
          >
            {pinned ? <DrawingPinFilledIcon /> : <DrawingPinIcon />}
          </button>
        </div>
        <div className='bg-white py-3 px-2 rounded-lg flex flex-col gap-3'>
          <p className='font-assistant text-sm cutoff-text'>{description}</p>
          <div className='text-neutral-600 flex items-center justify-between w-full'>
            <span className='py-[3px] px-2 text-[10px] font-semibold rounded-lg bg-neutral-100'>
              #School
            </span>
            <span className='text-xs font-semibold'>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Note;
