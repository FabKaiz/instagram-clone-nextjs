const Story = ({ img, username }) => {
  return (
    <div className="">
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-400 object-contain cursor-pointer transition-transform duration-200 ease-out hover:scale-110"
        src={img}
        alt="profil pic"
      />

      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )
}

export default Story
