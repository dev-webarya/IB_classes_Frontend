import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogApi } from '../../api/api/blogApi.ts';
import { Spinner, TagBadge } from '../../ui/index.jsx';
import { Clock, Heart, MessageCircle, Eye, ArrowRight, Feather, Mail, BookOpen, Users, Star, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';

type BlogSummary = {
    id: number | string;
    slug?: string;
    title: string;
    excerpt: string;
    featuredImageUrl?: string;
    tags?: string[];
    likesCount: number;
    commentsCount: number;
    viewsCount: number;
    publishedAt?: string;
};

export const HomePage = () => {
    const [blogs, setBlogs] = useState<BlogSummary[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const response = await blogApi.getBlogs({ size: 6, sort: 'popular' });
                setBlogs(response.data.content as BlogSummary[]);
            } catch (err) {
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };
        loadBlogs();
    }, []);

    return (
        <div className="overflow-x-hidden bg-white">

            {/* ───── HERO SECTION ───── */}
            <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d3b52 0%, #187596 50%, #1a9e73 100%)' }}>
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }} />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }} />
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-150 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }} />

                {/* Floating dots pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

                <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                        <Star className="h-3.5 w-3.5 text-yellow-300" fill="currentColor" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-white/90">A Star Classes Blog</span>
                    </div>

                    <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
                        Learn Smarter,<br />
                        <span className="text-yellow-300">Score Higher</span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                        Expert insights on IB, IGCSE & A-Level exam preparation, study strategies, and academic excellence.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link to="/blogs">
                            <button className="group flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:bg-yellow-300 hover:shadow-yellow-400/30 hover:shadow-xl hover:-translate-y-0.5">
                                Explore Articles
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                        <Link to="/blog/submit">
                            <button className="flex items-center gap-2 rounded-full bg-white/15 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm border border-white/30 shadow-lg transition-all hover:bg-white/25 hover:-translate-y-0.5">
                                <Feather className="h-4 w-4" />
                                Write Article
                            </button>
                        </Link>
                        <Link to="/blog/subscribe">
                            <button className="flex items-center gap-2 rounded-full bg-transparent px-7 py-3 text-sm font-bold text-white border-2 border-white/50 transition-all hover:border-white hover:bg-white/10 hover:-translate-y-0.5">
                                <Mail className="h-4 w-4" />
                                Subscribe
                            </button>
                        </Link>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                        {[
                            { icon: BookOpen, value: '200+', label: 'Articles' },
                            { icon: Users, value: '5K+', label: 'Readers' },
                            { icon: TrendingUp, value: '98%', label: 'Success Rate' },
                        ].map(({ icon: Icon, value, label }) => (
                            <div key={label} className="rounded-2xl bg-white/10 border border-white/15 px-4 py-4 backdrop-blur-sm">
                                <Icon className="mx-auto mb-1.5 h-5 w-5 text-yellow-300" />
                                <p className="text-xl font-extrabold text-white">{value}</p>
                                <p className="text-xs text-white/70">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="relative">
                    <svg viewBox="0 0 1440 60" className="block w-full" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            {/* ───── POPULAR BLOGS ───── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-[#187596]">Trending Now</p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Popular Blogs</h2>
                        </div>
                        <Link to="/blogs" className="hidden items-center gap-2 rounded-full border border-[#187596] px-5 py-2 text-sm font-semibold text-[#187596] transition-all hover:bg-[#187596] hover:text-white md:flex">
                            View all <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Spinner size="lg" />
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-white px-6 py-20 text-center">
                            <BookOpen className="mx-auto mb-4 h-12 w-12 text-gray-300" />
                            <p className="text-lg font-semibold text-gray-600">No articles yet.</p>
                            <p className="mt-1 text-sm text-gray-400">Be the first to <Link to="/blog/submit" className="font-semibold text-[#187596] underline underline-offset-4">submit an article</Link>.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                            {blogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    )}

                    {/* Mobile view all */}
                    <div className="mt-10 text-center md:hidden">
                        <Link to="/blogs">
                            <button className="rounded-full border-2 border-[#187596] px-8 py-3 text-sm font-bold text-[#187596] transition-all hover:bg-[#187596] hover:text-white">
                                View All Articles <ArrowRight className="inline h-4 w-4 ml-1" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

// ─── Blog Card Component ─────────────────────────────────────────────────────
const BlogCard = ({ blog }: { blog: BlogSummary }) => {
    const content = (
        <div className="group h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/70">
            {blog.featuredImageUrl ? (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={blog.featuredImageUrl}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
            ) : (
                <div className="h-48 bg-linear-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-teal-200" />
                </div>
            )}
            <div className="space-y-3 p-6">
                {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {blog.tags.slice(0, 2).map((tag: string) => (
                            <TagBadge key={tag} tag={tag} />
                        ))}
                    </div>
                )}
                <h3 className="line-clamp-2 text-lg font-extrabold leading-snug tracking-tight text-gray-900 group-hover:text-[#187596] transition-colors">
                    {blog.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-6 text-gray-500">{blog.excerpt}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-400">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-red-400"><Heart className="w-3.5 h-3.5" />{blog.likesCount}</span>
                        <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" />{blog.commentsCount}</span>
                        <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{blog.viewsCount}</span>
                    </div>
                    {blog.publishedAt && (
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {format(new Date(blog.publishedAt), 'MMM dd, yyyy')}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );

    return blog.slug ? (
        <Link to={`/blog/${blog.slug}`}>{content}</Link>
    ) : (
        <div>{content}</div>
    );
};
