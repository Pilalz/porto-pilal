"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ExternalLink,
  FolderGit2,
  Lock,
  Play,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ImageIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine media list: prefer project.images, fallback to project.imageUrl
  const mediaList =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : [];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalSlide, setModalSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Touch Swipe Gesture State
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = mediaList.length;

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (totalSlides > 1) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (totalSlides > 1) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  // Synchronize modal slide when opening
  const openModal = () => {
    setModalSlide(currentSlide);
    setIsModalOpen(true);
  };

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowRight" && totalSlides > 1) {
        setModalSlide((prev) => (prev + 1) % totalSlides);
      } else if (e.key === "ArrowLeft" && totalSlides > 1) {
        setModalSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, totalSlides]);

  // Video hover preview
  const handleMouseEnter = () => {
    if (project.videoUrl && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (project.videoUrl && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    }
  };

  // Touch Swipe Handlers for mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentMediaUrl = mediaList[currentSlide];
  const isCurrentImageFailed = currentMediaUrl ? failedImages[currentMediaUrl] : true;
  const isLocalAsset = currentMediaUrl ? currentMediaUrl.startsWith("/") : false;

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/60"
      >
        <div>
          {/* Browser Window Mockup Frame */}
          <div className="flex items-center justify-between border-b border-zinc-200/70 bg-zinc-100/70 px-3.5 py-2.5 dark:border-zinc-800/70 dark:bg-zinc-900/80">
            {/* macOS 3 dots */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80 transition-opacity group-hover:opacity-100" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 transition-opacity group-hover:opacity-100" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 transition-opacity group-hover:opacity-100" />
            </div>

            {/* Simulated Address Bar */}
            <div className="mx-2 flex max-w-[200px] flex-1 items-center justify-center gap-1 truncate rounded-md bg-white/80 px-2 py-0.5 text-[10px] text-zinc-500 shadow-2xs dark:bg-zinc-950/60 dark:text-zinc-400">
              <Lock className="h-2.5 w-2.5 text-zinc-400" />
              <span className="truncate font-mono">
                pilal.dev/{project.id}
              </span>
            </div>

            {/* Slide / Media Indicator */}
            <div className="flex items-center gap-1 text-[10px] font-medium text-zinc-400">
              {project.videoUrl ? (
                <span className="flex items-center gap-0.5 text-indigo-500 dark:text-indigo-400">
                  <Play className="h-2.5 w-2.5 fill-current" />
                  <span>Video</span>
                </span>
              ) : totalSlides > 1 ? (
                <span className="flex items-center gap-1 font-mono text-[10px] text-zinc-600 dark:text-zinc-300">
                  <ImageIcon className="h-2.5 w-2.5" />
                  {currentSlide + 1}/{totalSlides}
                </span>
              ) : (
                <span className="font-mono text-[9px]">16:10</span>
              )}
            </div>
          </div>

          {/* Media Preview Container with Carousel & Keyboard Accessibility */}
          <div
            role="button"
            tabIndex={0}
            onClick={openModal}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal();
              }
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="group/media relative aspect-16/10 w-full cursor-pointer overflow-hidden bg-zinc-100 select-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-950 dark:focus-visible:ring-zinc-600"
            aria-label={`${project.title} - ${language === "en" ? "Click to view full preview" : "Klik untuk melihat preview penuh"}`}
            title={language === "en" ? "Click or press Enter for full preview" : "Klik atau tekan Enter untuk melihat preview penuh"}
          >
            {project.videoUrl ? (
              <div className="relative h-full w-full">
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  loop
                  muted
                  playsInline
                  poster={currentMediaUrl}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-opacity group-hover:opacity-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md transition-transform group-hover:scale-110 dark:bg-zinc-900/90 dark:text-white">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </div>
                  </div>
                )}
              </div>
            ) : currentMediaUrl && !isCurrentImageFailed ? (
              <div className="relative h-full w-full">
                <Image
                  src={currentMediaUrl}
                  alt={`${project.title} - Slide ${currentSlide + 1} of ${totalSlides}`}
                  fill
                  unoptimized={!isLocalAsset}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() =>
                    setFailedImages((prev) => ({ ...prev, [currentMediaUrl]: true }))
                  }
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              /* Fallback Stylized Mockup Wireframe */
              <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 p-6 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Sparkles className="h-4 w-4 text-zinc-500" />
                    <span className="font-mono text-[11px]">Local Asset Preview</span>
                  </div>
                  <span className="rounded bg-zinc-200 px-2 py-0.5 text-[10px] font-mono text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {project.category}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                    {currentMediaUrl ? currentMediaUrl : "Simpan gambar di public/..."}
                  </p>
                  <div className="h-2 w-3/4 rounded bg-zinc-300/70 dark:bg-zinc-700/60" />
                  <div className="h-2 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>
            )}

            {/* Carousel Previous & Next Arrow Controls with Visible Focus */}
            {totalSlides > 1 && !project.videoUrl && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label={`${language === "en" ? "Previous slide" : "Slide sebelumnya"} for ${project.title}`}
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-white/40 bg-black/50 p-2 text-white opacity-0 backdrop-blur-xs transition-all duration-200 hover:scale-110 hover:bg-black/80 focus-visible:opacity-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white active:scale-95 group-hover/media:opacity-100"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label={`${language === "en" ? "Next slide" : "Slide berikutnya"} for ${project.title}`}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-white/40 bg-black/50 p-2 text-white opacity-0 backdrop-blur-xs transition-all duration-200 hover:scale-110 hover:bg-black/80 focus-visible:opacity-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white active:scale-95 group-hover/media:opacity-100"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Carousel Indicator Dots */}
                <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/50 px-2 py-1 backdrop-blur-xs">
                  {mediaList.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => goToSlide(idx, e)}
                      aria-label={`Slide ${idx + 1} of ${totalSlides}`}
                      className={`h-1.5 rounded-full transition-all focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-white ${
                        currentSlide === idx
                          ? "w-4 bg-white"
                          : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Hover Quick Action Badge */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-[1.5px] transition-all duration-200 group-hover/media:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-zinc-900 shadow-lg transition-transform duration-200 group-hover/media:scale-105 dark:bg-zinc-900/95 dark:text-zinc-100">
                <Maximize2 className="h-3 w-3" />
                <span>{language === "en" ? "View Preview" : "Lihat Preview"}</span>
              </span>
            </div>
          </div>

          {/* Content Details */}
          <div className="p-5">
            {/* Category & Year */}
            <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
                <FolderGit2 className="h-3.5 w-3.5 text-zinc-400" />
                <span>{project.category}</span>
              </div>
              <span className="font-mono text-[11px] text-zinc-400">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-2 text-base font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 line-clamp-2 dark:text-zinc-400">
              {project.description}
            </p>

            {/* Tech Stack Badges */}
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-200/80 bg-zinc-50/90 px-2 py-0.5 font-mono text-[10.5px] font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action Links */}
        <div className="flex items-center justify-between border-t border-zinc-100 px-5 py-3 dark:border-zinc-800/60">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex min-h-[36px] items-center gap-1 text-xs font-semibold text-zinc-900 transition-colors hover:text-zinc-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 dark:text-zinc-100 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-600"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex min-h-[36px] items-center gap-1 text-xs font-semibold text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-600"
              >
                <GithubIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:scale-110" />
                <span>Repository</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex min-h-[36px] items-center text-[11px] font-semibold text-zinc-500 hover:text-zinc-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus-visible:ring-zinc-600"
          >
            {language === "en" ? "Details" : "Detail"}
          </button>
        </div>
      </div>

      {/* Expanded Lightbox Modal with Carousel & Keyboard Trapping */}
      {isModalOpen && mounted && createPortal(
        <div
          onClick={() => setIsModalOpen(false)}
          className="animate-fade-in-up fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3.5 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {project.category}
                </span>
                <h4
                  id={`modal-title-${project.id}`}
                  className="text-sm font-bold text-zinc-900 dark:text-zinc-100"
                >
                  {project.title}
                </h4>
                {totalSlides > 1 && !project.videoUrl && (
                  <span className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    {modalSlide + 1} / {totalSlides}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                aria-label={language === "en" ? "Close preview modal" : "Tutup preview"}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Media Body with Carousel */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-black select-none">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : mediaList[modalSlide] && !failedImages[mediaList[modalSlide]] ? (
                <Image
                  src={mediaList[modalSlide]}
                  alt={`${project.title} - Slide ${modalSlide + 1} of ${totalSlides}`}
                  fill
                  unoptimized={!mediaList[modalSlide].startsWith("/")}
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-zinc-400">
                  <ImageIcon className="mb-2 h-10 w-10 opacity-40" />
                  <p className="text-sm font-medium">
                    {language === "en" ? "Image asset preview not found" : "Aset gambar belum ditemukan di direktori lokal."}
                  </p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    {mediaList[modalSlide] || "public/..."}
                  </p>
                </div>
              )}

              {/* Modal Carousel Arrows */}
              {totalSlides > 1 && !project.videoUrl && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setModalSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
                    }
                    className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-white/30 bg-black/60 p-2.5 text-white transition-all hover:scale-110 hover:bg-black/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                    aria-label={language === "en" ? "Previous slide" : "Slide sebelumnya"}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setModalSlide((prev) => (prev + 1) % totalSlides)
                    }
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-white/30 bg-black/60 p-2.5 text-white transition-all hover:scale-110 hover:bg-black/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                    aria-label={language === "en" ? "Next slide" : "Slide berikutnya"}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Thumbnail Bar in Modal */}
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-xs">
                    {mediaList.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setModalSlide(idx)}
                        className={`h-2 rounded-full transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white ${
                          modalSlide === idx
                            ? "w-6 bg-white"
                            : "w-2 bg-white/40 hover:bg-white/75"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer Description & Links */}
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-lg space-y-1">
                <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    <span>{language === "en" ? "Visit Demo" : "Kunjungi Demo"}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>{language === "en" ? "Code" : "Kode"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
