import react from "react"

const page = () => {
  return (
    <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="/0 (16).jpg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “my name is alyan ali.i am student of Ai course.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Aliyan Mazhar
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default page