

export default function AuthenticationButton() {
    return (
        <>

            <div className="flex">
                <div className="border-r border-white w-[87px] flex justify-center items-center">
                    <button className="text-white text-lg font-semibold">ثبت نام</button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-white text-lg font-semibold">ورود</button>
                    <img src="imgs/icons/user.png" className="w-7" alt="" />
                </div>
            </div>

        </>
    )
}
