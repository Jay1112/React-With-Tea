import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

export default function App() {
  return (
    <div className="max-w-[767px] mx-auto h-screen flex flex-col overflow-y-auto">
      <NoteForm/>
      <hr className="bg-gray-200 h-[2px]"/>
      <NotesList />
    </div>
  )
}