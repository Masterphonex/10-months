"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations";

gsap.registerPlugin(useGSAP);

export { useGSAP };