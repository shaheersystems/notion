import React from "react";
import Note from "../components/Note";
import { getStarredNotes } from "../store/notes";
import { useSelector } from "react-redux";
import { StarIcon } from "@radix-ui/react-icons";
function Starred() {
  const notes = useSelector((state) => state.notes);
  const starredNotes = getStarredNotes(notes);

  return (
    <div className='flex-1'>
      <div className='px-4 py-2 space-y-3'>
        {starredNotes.length > 0 ? (
          <span className='flex py-2 items-center gap-2 text-sm text-neutral-500 font-semibold'>
            <StarIcon />
            <span>STARRED</span>
          </span>
        ) : (
          ""
        )}
        {starredNotes.length > 0 ? (
          <div className='py-4 flex items-center gap-3 flex-wrap'>
            {starredNotes.map((note) => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  description={note.description}
                  pinned={note.pinned}
                  starred={note.starred}
                  rawDate={note.date}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <h2 className='text-base font-semibold leading-6 text-gray-900'>
              Starred Notes
            </h2>
            <p className='mt-1 text-sm text-gray-500'>
              You haven’t starred any of your notes yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Starred;
