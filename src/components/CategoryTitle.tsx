import { MaxWidthWrapper } from "."

type Props = {
  category: string
  subCategory: string
}

export const CategoryTitle = ({ category, subCategory }: Props) => {
  return (
    <MaxWidthWrapper className="flex flex-col justify-center items-center text-center bg-background-tertiary py-4 my-2">
      <h2 className="font-medium text-lg">{category}</h2>
      <h3 className="font-light text-[10px]">
        {subCategory.toUpperCase()} / PRODUCT / {category.toUpperCase()}
      </h3>
    </MaxWidthWrapper>
  )
}
