import { Outlet } from "react-router"
import { PageTitle2 } from "../components/ui/typography/Title"


const HomePage = () => {

    return (
        <section className="w-full h-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-5 border border-gray-200 rounded-lg w-7xl flex">
                <div className="hidden lg:block lg:w-full h-[90vh] relative overflow-hidden bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1773332585771-5c9c5fa642d1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
                    <div className="absolute inset-0  bg-teal-950/40"></div>

                    <div className="absolute inset-0 flex flex-col justify-center p-10 z-10 ">
                        <div className="bg-white/60 backdrop-blur-sm p-10 rounded-lg text-center justify-center items-center flex flex-col gap-5">
                            <div className="size-25">
                                <img
                                    src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="logo"
                                    className="size-20 rounded-full"
                                />
                            </div>

                            <PageTitle2 title="Welcome to CMS" />

                            <div>
                                <p>Welcome! Please log in to access your dashboard.</p>
                                <p>Manage your content quickly and securely with our CMS.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Outlet />

            </div>
        </section>

    )
}

export default HomePage