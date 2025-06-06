import Link from 'next/link';
import Image from 'next/image';
import { auth, signOut, signIn } from '@/auth';

const Navbar = async () => {
    const session = await auth();
    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="Creamiverse" width={145} height={30} />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href="/recipe/create">
                                <span>
                                    Create
                                </span>
                            </Link>

                            <Link href={`/user/${(session?.user?.email)?.split("@")[0]}`}>
                                <span>{session?.user?.name}</span>
                            </Link>

                            <form action={async () => {
                                'use server';

                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type="submit">
                                    <span>Logout</span>
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <form action={async () => {
                                'use server';

                                await signIn("google")
                            }}>
                                <button type='submit'>
                                    <span>Login</span>
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar
