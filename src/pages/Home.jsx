import React from "react";
import Note from "../components/Note";
import { useSelector } from "react-redux";
import { getPinnedNotes, getUnpinnedNotes } from "../store/notes";
import EmptyState from "../components/EmptyState";

function Home() {
  const notes = useSelector((state) => state.notes);
  const pinnedNotes = getPinnedNotes(notes);
  const unpinnedNotes = getUnpinnedNotes(notes);
  console.log(notes);
  return (
    <div className='flex-1'>
      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className='px-4 py-2'>
          <div className='py-2'>
            {pinnedNotes.length > 0 && (
              <span className='text-sm text-neutral-500 font-semibold'>
                PINNED
              </span>
            )}
            <div className='py-4 flex items-center gap-3 flex-wrap'>
              {pinnedNotes.map((note) => {
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
          </div>
          <div>
            {pinnedNotes.length > 0 && unpinnedNotes.length > 0 && (
              <span className='text-sm text-neutral-500 font-semibold'>
                OTHERS
              </span>
            )}
            <div className='py-4 flex items-center gap-3 flex-wrap'>
              {unpinnedNotes.map((note) => {
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
