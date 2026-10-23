import { fireEvent, render, screen, within } from "@testing-library/react";

import PhotoCarousel from "./PhotoCarousel";

const mockScrollTo = jest.fn();
const mockOn = jest.fn();
const mockOff = jest.fn();

jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => [
    jest.fn(),
    {
      scrollTo: mockScrollTo,
      on: mockOn,
      off: mockOff,
      selectedScrollSnap: jest.fn(() => 0),
    },
  ],
}));

describe("PhotoCarousel", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders nothing when there are no photos", () => {
    const { container } = render(
      <PhotoCarousel
        photos={[]}
        alt="Chon"
        isFavorite={false}
        onFavoriteClick={() => {}}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("does not display pagination for a single photo", () => {
    render(
      <PhotoCarousel
        photos={["/images/chon.png"]}
        alt="Chon"
        isFavorite={false}
        onFavoriteClick={() => {}}
      />,
    );

    expect(screen.queryByTestId("carousel-pagination")).not.toBeInTheDocument();
  });

  it("displays one navigation dot per photo", () => {
    render(
      <PhotoCarousel
        photos={[
          "/images/chon.png",
          "/images/refuge-nac.png",
          "/images/poupette.png",
        ]}
        alt="Chon"
        isFavorite={false}
        onFavoriteClick={() => {}}
      />,
    );

    const pagination = screen.getByTestId("carousel-pagination");
    const dots = within(pagination).getAllByRole("button");

    expect(dots).toHaveLength(3);
  });

  it("scrolls to the selected photo when a dot is clicked", () => {
    render(
      <PhotoCarousel
        photos={[
          "/images/chon.png",
          "/images/refuge-nac.png",
          "/images/poupette.png",
        ]}
        alt="Chon"
        isFavorite={false}
        onFavoriteClick={() => {}}
      />,
    );

    const pagination = screen.getByTestId("carousel-pagination");
    const dots = within(pagination).getAllByRole("button");

    fireEvent.click(dots[2]);

    expect(mockScrollTo).toHaveBeenCalledWith(2);
  });
});
