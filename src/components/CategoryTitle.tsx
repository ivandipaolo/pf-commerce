import { MaxWidthWrapper } from "."

type Props = {
  breadcrumbs?: string[]
}

export const CategoryTitle = ({
  breadcrumbs = ["HOME", "PRODUCT", "TV COLLECTION"],
}: Props) => {
  return (
    <MaxWidthWrapper className="flex flex-col justify-center items-center text-center bg-background-tertiary py-4">
      <h2 className="font-medium text-lg">
        {breadcrumbs[breadcrumbs.length - 1]}
      </h2>
      <h3 className="font-light text-[10px]">
        {breadcrumbs.map((breadcrumb, index) =>
          index !== breadcrumbs.length - 1 ? `${breadcrumb} / ` : breadcrumb
        )}
      </h3>
    </MaxWidthWrapper>
  )
}
