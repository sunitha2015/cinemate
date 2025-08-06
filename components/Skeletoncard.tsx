"use client";

import { Card, Skeleton } from "@heroui/react";

export const SkeletonCard = () => {
  return (
    <Card className="w-full p-4 space-y-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[420px] rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 w-full rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="w-3/4 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-200" />
        </Skeleton>
      </div>
    </Card>
  );
};
