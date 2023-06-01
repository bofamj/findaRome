-- CreateTable
CREATE TABLE "Hotels" (
    "id" SERIAL NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "images" TEXT[],
    "isSuperhost" BOOLEAN NOT NULL,
    "lat" INTEGER NOT NULL,
    "lng" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "previewAmenities" TEXT[],
    "price" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "reviewsCount" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hotels_pkey" PRIMARY KEY ("id")
);
