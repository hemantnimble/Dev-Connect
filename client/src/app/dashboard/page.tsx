// pages/dashboard.js (Dashboard Page)
"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("feed");

  // Sample data for demonstration
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        username: "sarahdev",
        avatar: "/avatars/sarah.jpg",
      },
      content:
        "Just published a new tutorial on building a full-stack application with Next.js and MongoDB! Check it out and let me know what you think.",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
    },
    {
      id: 2,
      user: {
        name: "Alex Chen",
        username: "alexchen",
        avatar: "/avatars/alex.jpg",
      },
      content:
        "Looking for contributors to my open-source project - a VS Code extension for better code documentation. If you're interested in TypeScript and developer tools, reach out!",
      timestamp: "5 hours ago",
      likes: 42,
      comments: 12,
      shares: 7,
    },
    {
      id: 3,
      user: {
        name: "Maria Rodriguez",
        username: "mariadev",
        avatar: "/avatars/maria.jpg",
      },
      content:
        "Just completed the #100DaysOfCode challenge! It was an incredible journey of consistency and growth. My biggest takeaway: building a habit is more important than the specific technology you learn.",
      timestamp: "1 day ago",
      likes: 87,
      comments: 15,
      shares: 21,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Dashboard - DevConnect</title>
        <meta name="description" content="Your DevConnect dashboard" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-indigo-600 rounded-md"></div>
                <Link
                  href={"/"}
                  className="ml-2 text-xl font-bold text-gray-900"
                >
                  DevConnect
                </Link>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link
                  href="/dashboard"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/explore"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Explore
                </Link>
                <Link
                  href="/jobs"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Jobs
                </Link>
                <Link
                  href="/community"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Community
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  New Post
                </button>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                <div className="ml-3 relative">
                  <div>
                    <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-indigo-300 flex items-center justify-center text-white font-bold">
                        <Link href={"/user/profile"}>JD</Link>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white text-black shadow rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-indigo-300 flex items-center justify-center text-white font-bold text-xl">
                      JD
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">John Doe</h3>
                      <p className="text-gray-600">@johndoe</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <p className="font-bold">245</p>
                      <p className="text-sm text-gray-600">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">87</p>
                      <p className="text-sm text-gray-600">Following</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/user/profile"
                      className="w-full block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>

                <div className="bg-white text-black shadow rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-4">Trending Tags</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/tags/react"
                        className="text-indigo-600 hover:text-indigo-800 flex justify-between"
                      >
                        <span>#reactjs</span>
                        <span className="text-gray-500">245 posts</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tags/nextjs"
                        className="text-indigo-600 hover:text-indigo-800 flex justify-between"
                      >
                        <span>#nextjs</span>
                        <span className="text-gray-500">189 posts</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tags/javascript"
                        className="text-indigo-600 hover:text-indigo-800 flex justify-between"
                      >
                        <span>#javascript</span>
                        <span className="text-gray-500">512 posts</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tags/webdev"
                        className="text-indigo-600 hover:text-indigo-800 flex justify-between"
                      >
                        <span>#webdev</span>
                        <span className="text-gray-500">367 posts</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tags/opensource"
                        className="text-indigo-600 hover:text-indigo-800 flex justify-between"
                      >
                        <span>#opensource</span>
                        <span className="text-gray-500">124 posts</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main content */}
              <div className="md:col-span-2">
                <div className="bg-white shadow rounded-lg mb-6">
                  <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                      <button
                        onClick={() => setActiveTab("feed")}
                        className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                          activeTab === "feed"
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        My Feed
                      </button>
                      <button
                        onClick={() => setActiveTab("discover")}
                        className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                          activeTab === "discover"
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        Discover
                      </button>
                    </nav>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-300 flex items-center justify-center text-white font-bold">
                          JD
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <form action="#" className="relative">
                          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                            <label htmlFor="comment" className="sr-only">
                              Add your comment
                            </label>
                            <textarea
                              rows={3}
                              name="comment"
                              id="comment"
                              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="Share something with your network..."
                              defaultValue={""}
                            />
                          </div>
                          <div className="mt-2 flex justify-end">
                            <button
                              type="submit"
                              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Post
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white shadow rounded-lg p-6"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-full bg-indigo-300 flex items-center justify-center text-white font-bold">
                            {post.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline">
                            <h3 className="text-lg font-medium text-gray-900">
                              {post.user.name}
                            </h3>
                            <p className="ml-2 text-sm text-gray-500">
                              @{post.user.username}
                            </p>
                            <p className="ml-auto text-sm text-gray-500">
                              {post.timestamp}
                            </p>
                          </div>
                          <p className="mt-2 text-gray-700">{post.content}</p>
                          <div className="mt-4 flex space-x-6">
                            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                              <svg
                                className="h-5 w-5 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                              <svg
                                className="h-5 w-5 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                              </svg>
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                              <svg
                                className="h-5 w-5 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                />
                              </svg>
                              <span>{post.shares}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
