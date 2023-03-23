export default function FormWrapper({ title, children }) {
    return (
        <>
            <div className="flex flex-col justify-center"><div className="text-sm text-center tracking-wide">{title}</div></div>
            <div className="flex flex-col items-center w-5/6 mx-auto h-fit">{children}</div>
        </>
    )
}
