export default function PlayerCreateLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}