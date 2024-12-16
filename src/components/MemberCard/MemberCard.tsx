import { Member } from "types"

type MemberCardProps = Pick<Member, "first_name" | "last_name" | "position" | "srcImage">;

export const MemberCard = ({ first_name, last_name, position, srcImage }: MemberCardProps) => {
  return (
    <>
    <div className="flex">
      <img src={srcImage} className="w-44 h-44 rounded-xl"/>
      <div className="m-0 pl-3 w-1/2">
        <p className="text-white font-medium underline text-left truncate text-3xl m-0 mt-3">{first_name}</p>
        <p className="text-white font-medium underline text-left truncate text-3xl m-0">{last_name}</p>
        <p className="text-light-grey text-xl font-regular text-left line-clamp-2 m-0 mt-5">{position.toLowerCase()}</p>
      </div>
    </div>
    </>
  )
}