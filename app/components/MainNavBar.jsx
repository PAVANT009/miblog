// import * as React from "react";
// import { NavigationMenu } from "radix-ui";
// import classNames from "classnames";
// import { CaretDownIcon } from "@radix-ui/react-icons";

// const NavigationMenuDemo = () => {
// 	return (
// 		<NavigationMenu.Root className="relative z-10 flex w-fit self-center justify-center  border-2 border-gray-300">
// 			<NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1">
// 				<NavigationMenu.Item>
// 					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
// 						Solutions{" "}
// 						<CaretDownIcon
// 							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
// 							aria-hidden
// 						/>
// 					</NavigationMenu.Trigger>
// 					<NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
// 						<ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
// 							<ListItem href="https://stitches.dev/" title="Stitches">
// 								<div>
//                                     <div className="bg-gray-400 border-2 border-white h-32 w-32">
//                                         <ul className="flex flex-row justify-between">
//                                             <li>
//                                                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
//                                                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
//                                             </li>
//                                             <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
//                                             <li className="flex flex-col justify-between">
//                                                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
//                                                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <h1>person</h1>
//                                 </div>
// 							</ListItem>
// 							<ListItem href="/colors" title="Colors">
// 								Beautiful, thought-out palettes with auto dark mode.
// 							</ListItem>
// 							<ListItem href="https://icons.radix-ui.com/" title="Icons">
// 								A crisp set of 15x15 icons, balanced and consistent.
// 							</ListItem>
// 						</ul>
// 					</NavigationMenu.Content>
// 				</NavigationMenu.Item>

// 				<NavigationMenu.Item>
// 					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
// 						Cases{" "}
// 						<CaretDownIcon
// 							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
// 							aria-hidden
// 						/>
// 					</NavigationMenu.Trigger>
// 					<NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
// 						<ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
// 							<ListItem
// 								title="Introduction"
// 								href="/primitives/docs/overview/introduction"
// 							>
// 								Build high-quality, accessible design systems and web apps.
// 							</ListItem>
// 							<ListItem
// 								title="Getting started"
// 								href="/primitives/docs/overview/getting-started"
// 							>
// 								A quick tutorial to get you up and running with Radix
// 								Primitives.
// 							</ListItem>
// 							<ListItem title="Styling" href="/primitives/docs/guides/styling">
// 								Unstyled and compatible with any styling solution.
// 							</ListItem>
// 							<ListItem
// 								title="Animation"
// 								href="/primitives/docs/guides/animation"
// 							>
// 								Use CSS keyframes or any animation library of your choice.
// 							</ListItem>
// 							<ListItem
// 								title="Accessibility"
// 								href="/primitives/docs/overview/accessibility"
// 							>
// 								Tested in a range of browsers and assistive technologies.
// 							</ListItem>
// 							<ListItem
// 								title="Releases"
// 								href="/primitives/docs/overview/releases"
// 							>
// 								Radix Primitives releases and their changelogs.
// 							</ListItem>
// 						</ul>
// 					</NavigationMenu.Content>
// 				</NavigationMenu.Item>

// 				<NavigationMenu.Item>
// 					<NavigationMenu.Link
// 						className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
// 						href="https://github.com/radix-ui"
// 					>
// 						Github
// 					</NavigationMenu.Link>
// 				</NavigationMenu.Item>

// 				<NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
// 					<div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
// 				</NavigationMenu.Indicator>
// 			</NavigationMenu.List>

// 			<div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
// 				<NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
// 			</div>
// 		</NavigationMenu.Root>
// 	);
// };

// const ListItem = React.forwardRef(
// 	({ className, children, title, ...props }, forwardedRef) => (
// 		<li>
// 			<NavigationMenu.Link asChild>
// 				<a
// 					className={classNames(
// 						"block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
// 						className,
// 					)}
// 					{...props}
// 					ref={forwardedRef}
// 				>
// 					<div className="mb-[5px] font-medium leading-[1.2] text-violet12">
// 						{title}
// 					</div>
// 					<p className="leading-[1.4] text-mauve11">{children}</p>
// 				</a>
// 			</NavigationMenu.Link>
// 		</li>
// 	),
// );

// export default NavigationMenuDemo;


import * as React from "react";
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
  Link,
  Indicator,
  Viewport
} from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";

import ItemBox from "../ui/itemBox";
import Person from "../ui/svg/person";
import Group from "../ui/svg/group";
import Enterprise from "../ui/svg/enterprise";
import Todo from "../ui/svg/todo";
import Email from "../ui/svg/email";
import Note from "../ui/svg/note";
import Goal from "../ui/svg/goal";

const r = 3;
const crcol = "#d1d5db";

const NavigationMenuDemo = () => {
  return (
    <Root className="relative z-10 flex items-center">
      <List className="m-0 flex w-[90vh] justify-between list-none px-60">
        <Item>
          <Trigger  className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[14px] font-medium font-calsans text-gray-600 outline-none hover:text-gray-700 hover:bg-gray-100 transition">
            Solutions{" "}
            <CaretDownIcon
              className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </Trigger>

          <Content className=" block !opacity-100 !visible  left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto" >

            <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <ListItem href="https://stitches.dev/" >
					<ItemBox
						
						Svg={<Person/>}
						header={"For Individuals"}
						context={"Personal notes made simple"}
						/>
              </ListItem>
              <ListItem href="https://stitches.dev/" >
					<ItemBox
						Svg={<Enterprise/>}
						header={"For Enterprise"}
						context={"Powerful tools for teams"}
						/>
              </ListItem>
              <ListItem href="https://stitches.dev/" >
					<ItemBox
						Svg={<Group/>}
						header={"For Groups"}
						context={"Stay organized together"}
					/>
              </ListItem>
                            

            </ul>
          </Content>
        </Item>
		<Item>
			<Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[14px] font-medium font-calsans text-gray-600 outline-none hover:text-gray-700 hover:bg-gray-100 transition">
				Overview{" "}
				<CaretDownIcon
					className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
					aria-hidden
				/>
			</Trigger>
			<Content  className="absolute left-0 top-0 w-full sm:w-auto ">
				<ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
					<ListItem href="/primitives/docs/overview/getting-started">
			<ItemBox
				Svg={<Todo />}
				header={"Task Management"}
				context={"Keep track of your to-dos efficiently"}
			/>
			</ListItem>
			<ListItem href="/primitives/docs/guides/styling">
			<ItemBox
				Svg={<Email />}
				header={"Communication"}
				context={"Stay connected through emails"}
			/>
			</ListItem>
			<ListItem href="/primitives/docs/guides/animation">
			<ItemBox
				Svg={<Note />}
				header={"Notes & Documentation"}
				context={"Capture ideas and important info"}
			/>
			</ListItem>
			<ListItem href="/primitives/docs/overview/accessibility">
			<ItemBox
				Svg={<Goal />}
				header={"Accessibility"}
				context={"Design for everyone with ease"}
			/>
			</ListItem>


				</ul>
			</Content>
		</Item>

        <Item>
          <Link
            className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[14px] font-medium font-calsans text-gray-600 outline-none hover:text-gray-700 hover:bg-gray-100 transition"
            href="https://github.com"
          >
            Github
          </Link>
        </Item>

        <Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
        </Indicator>
      </List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <Link asChild>
        <a
          className={classNames(
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
            {title}
          </div>
          {typeof children === "string" ? (
            <p className="leading-[1.4] text-mauve11">{children}</p>
          ) : (
            <div className="text-mauve11">{children}</div>
          )}
        </a>
      </Link>
    </li>
  )
);
ListItem.displayName = "ListItem";

export default NavigationMenuDemo;
