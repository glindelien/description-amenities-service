import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  color: #222222;
`

const StyledEsc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.05s ease;
  font-family: 'Arial';
  margin-bottom: 25px;

  &:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }
`

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 0px 0px 0px 10px;
`

const StyledCategory = styled.div`
  font-size: 17px;
  font-weight: 500;
  padding-left: 10px;
`

const StyledCT = styled.div`
  padding-top: 50px;
`

const StyledAmenity = styled.div`
  font-size: 14px;
  font-weight: normal;
  padding: 32px 0px 32px 0px;
  border-bottom: 1px solid #dedede;
`

const StyledNotIncluded = styled(StyledAmenity)`
  text-decoration: line-through;
`

const StyledDesc = styled.div`
  color: #717171;
  font-weight: 300;
  letter-spacing 0.02rem;
  padding-top: 6px;
`

function Modal({ closeModal, amenities }) {
  const basic = [];
  const facilities = [];
  const dining = [];
  const bedBath = [];
  const notIncluded = [
    '24 Hour Check-In',
    'Air Conditioning',
    'Heating',
    'Cable TV',
    'Free WiFi',
    'Smoke Detector',
    'Free Parking',
    'Washer/Dryer'
  ];

  // Descriptions
  const wifi = <StyledDesc>Continuous access in the listing</StyledDesc>
  const heating = <StyledDesc>Central heating or a heater in the listing</StyledDesc>
  const checkIn24Hrs = <StyledDesc>Check-In is available 24 hours a day</StyledDesc>
  const pool = <StyledDesc>This listing features a pool on the property</StyledDesc>
  const hotTub = <StyledDesc>This listing features a hot tub on the property</StyledDesc>
  const kitchen = <StyledDesc>Space where guests can cook their own meals</StyledDesc>

  for (let i = 0; i < amenities.length; i++) {
    if (amenities[i].amenity_ID > 0 && amenities[i].amenity_ID < 7) {
      basic.push(amenities[i].name);
    }
    if (amenities[i].amenity_ID > 6 && amenities[i].amenity_ID < 16) {
      facilities.push(amenities[i].name);
    }
    if (amenities[i].amenity_ID > 15 && amenities[i].amenity_ID < 20) {
      dining.push(amenities[i].name);
    }
    if (amenities[i].amenity_ID > 19) {
      bedBath.push(amenities[i].name);
    }
    if (notIncluded.includes(amenities[i].name)) {
      let index = notIncluded.indexOf(amenities[i].name);
      notIncluded.splice(index, 1)
    }
  }

  return (
    <StyledModal>
      <StyledEsc onClick={closeModal}>X</StyledEsc>
      <StyledTitle>Amenities</StyledTitle>

      <StyledCategory>

        {/* Basic */}
        <StyledCT>{basic.length > 0 ? 'Basic' : null}</StyledCT>

        {basic.map(amn => {
          return (
            <StyledAmenity key={amn}>
              {amn}
              <br />
              {/* add descriptions if applicable */}
              {amn === 'Free WiFi' ? wifi : null}
              {amn === 'Heating' ? heating : null}
              {amn === '24 Hour Check-In' ? checkIn24Hrs : null}
            </StyledAmenity>
          );
        })}

        {/* Facilities */}
        <StyledCT>{facilities.length > 0 ? 'Facilities' : null}</StyledCT>

        {facilities.map(amn => {
          return (
            <StyledAmenity key={amn}>
              {amn}
              <br/>
              {/* add descriptions if applicable */}
              {amn === 'Pool' ? pool : null}
              {amn === 'Hot Tub' ? hotTub : null}
            </StyledAmenity>
          );
        })}

        {/* Dining */}
        <StyledCT>{dining.length > 0 ? 'Dining' : null}</StyledCT>

        {dining.map(amn => {
          return (
          <StyledAmenity key={amn}>
            {amn}
            <br/>
            {amn === 'Kitchen' ? kitchen : null}
            </StyledAmenity>
          );
        })}

        {/* Bed and Bath */}
        <StyledCT>{bedBath.length > 0 ? 'Bed and Bath' : null}</StyledCT>

        {bedBath.map(amn => {
          return <StyledAmenity key={amn}>{amn}</StyledAmenity>;
        })}

        {/* Not Included */}
        <StyledCT>{notIncluded.length > 0 ? 'Not Included' : null}</StyledCT>

        {notIncluded.map(amn => {
          return <StyledNotIncluded key={amn}>{amn}</StyledNotIncluded>;
        })}

      </StyledCategory>
    </StyledModal>
  );
}

export default Modal;
