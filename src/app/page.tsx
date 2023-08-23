import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "./components/TodoItem";
import { redirect } from "next/navigation";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({where: {id}, data: {complete}})
}

async function clearTodo() {
  "use server"

  await prisma.todo.deleteMany({where: {complete:true}})
  redirect("/")
}

export default async function Home() {
  // Get all todos from database and load into variable
  const todos = await getTodos()
  // Return website HTML
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">To Do List</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo =>(
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
      <form action={clearTodo} className="flex justify-end mb-4">
        <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Clear</button>
      </form>
    </>
  )
}