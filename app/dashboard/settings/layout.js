import SideNav from "./components/side-nav";

export default function Layout({children}) {
  return (
    <div className="col-span-4 lg:col-span-1">
        <aside>
            <SideNav/>
        </aside>
        <div className="col-span-4 lg:col-span-3">
            {children}
        </div>
    </div>
  )
}
