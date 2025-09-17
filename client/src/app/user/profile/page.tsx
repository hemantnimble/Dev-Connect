// pages/profile.js (Profile Page)
"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("posts");

  // Sample data for demonstration
  const user = {
    name: "John Doe",
    username: "johndoe",
    bio: "Full-stack developer passionate about React, Node.js, and open source. Building tools to make developers' lives easier.",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    joinDate: "January 2020",
    followers: 245,
    following: 87,
    avatar: "/avatars/john.jpg",
  };

  const posts = [
    {
      id: 1,
      content:
        "Just launched v2.0 of my open-source project! This release includes TypeScript support, improved documentation, and several performance optimizations.",
      timestamp: "2 days ago",
      likes: 42,
      comments: 12,
    },
    {
      id: 2,
      content:
        "Wrote a comprehensive guide on implementing authentication in Next.js applications. Covers everything from basic auth to OAuth and JWT strategies.",
      timestamp: "1 week ago",
      likes: 87,
      comments: 23,
    },
    {
      id: 3,
      content:
        "Just gave a talk at React Summit about state management patterns in large applications. Slides and code examples are available on my GitHub.",
      timestamp: "2 weeks ago",
      likes: 124,
      comments: 31,
    },
  ];

  const projects = [
    {
      id: 1,
      name: "React UI Kit",
      description:
        "A comprehensive set of accessible and customizable React components.",
      stars: 245,
      forks: 87,
      language: "TypeScript",
    },
    {
      id: 2,
      name: "DevTools Extension",
      description:
        "Browser extension for debugging and profiling web applications.",
      stars: 112,
      forks: 32,
      language: "JavaScript",
    },
    {
      id: 3,
      name: "API Boilerplate",
      description:
        "Production-ready Node.js API starter with authentication, logging, and testing.",
      stars: 187,
      forks: 54,
      language: "JavaScript",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{user.name} - DevConnect</title>
        <meta
          name="description"
          content={`${user.name}'s profile on DevConnect`}
        />
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
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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
                        JD
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
            {/* Profile header */}
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-lg"></div>
              <div className="px-6 pb-6 -mt-16">
                <div className="flex items-end justify-between">
                  <div className="flex items-end space-x-6">
                    <div className="h-24 w-24 rounded-full bg-white p-1">
                      <div className="h-full w-full rounded-full bg-indigo-300 flex items-center justify-center text-white font-bold text-4xl">
                        JD
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        {user.name}
                      </h1>
                      <p className="text-gray-600">@{user.username}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Edit Profile
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700">{user.bio}</p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span>{user.location}</span>
                    <span>•</span>
                    <a
                      href={user.website}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {user.website}
                    </a>
                    <span>•</span>
                    <span>Joined {user.joinDate}</span>
                  </div>
                  <div className="mt-4 flex space-x-6">
                    <Link
                      href="/followers"
                      className="text-sm text-gray-700 hover:text-gray-900"
                    >
                      <span className="font-semibold">{user.followers}</span>{" "}
                      Followers
                    </Link>
                    <Link
                      href="/following"
                      className="text-sm text-gray-700 hover:text-gray-900"
                    >
                      <span className="font-semibold">{user.following}</span>{" "}
                      Following
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex">
                  <button
                    onClick={() => setActiveTab("posts")}
                    className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                      activeTab === "posts"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Posts
                  </button>
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                      activeTab === "projects"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => setActiveTab("activity")}
                    className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                      activeTab === "activity"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Activity
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "posts" && (
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                      >
                        <p className="text-gray-700 mb-2">{post.content}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.timestamp}</span>
                          <div className="flex space-x-4">
                            <button className="flex items-center hover:text-gray-700">
                              <svg
                                className="h-4 w-4 mr-1"
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
                              {post.likes}
                            </button>
                            <button className="flex items-center hover:text-gray-700">
                              <svg
                                className="h-4 w-4 mr-1"
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
                              {post.comments}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "projects" && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <h3 className="font-medium text-gray-900">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {project.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                            <span className="text-sm text-gray-600">
                              {project.language}
                            </span>
                          </div>
                          <div className="flex space-x-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <svg
                                className="h-4 w-4 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                              </svg>
                              {project.stars}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <svg
                                className="h-4 w-4 mr-1"
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
                              {project.forks}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "activity" && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          <span className="font-medium">Starred</span>{" "}
                          repository{" "}
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-800"
                          >
                            alexchen/react-ui-kit
                          </a>
                        </p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          <span className="font-medium">Committed</span> to
                          repository{" "}
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-800"
                          >
                            johndoe/api-boilerplate
                          </a>
                        </p>
                        <p className="text-sm text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          <span className="font-medium">Commented</span> on{" "}
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-800"
                          >
                            Sarah's post
                          </a>
                        </p>
                        <p className="text-sm text-gray-500">2 days ago</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
