import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/service/reservation.service';
import jsPDF from 'jspdf'


@Component({
  selector: 'app-reservations-report',
  templateUrl: './reservations-report.component.html',
  styleUrls: ['./reservations-report.component.css']
})
export class ReservationsReportComponent implements OnInit {
  datePipeString: string | null = '';
  reportFilteredReservation: any []= [];
  reservationArr: any = [];
  @Input() reservationFrom: Date | undefined;
  @Input() reservationTo: Date | undefined;
  @Input() filterDate: Date | undefined|null;
  constructor(private reservationService: ReservationService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.GetReservation();
    this.reportFilteredReservation=this.reservationArr
  }
  Clear() {
    this.filterDate=null;
    
    
  }
  GetReservation() {
    this.reservationService.GetReservation().subscribe(
      result => {
        this.reservationArr = result;
      }
    );
  }
  ReportFilter() {
    let data=this.filterDate;
    console.log(data);
    
    for (let i = 0; i < this.reservationArr.length; i++) {

      this.datePipeString = this.datePipe.transform(this.reservationArr[i].reservation_From, 'yyyy-MM');

      if (this.datePipeString == data) {
        this.reportFilteredReservation.push(this.reservationArr[i]);
      }

    }
    console.log(this.reportFilteredReservation);
  }
  DownloadReport() {
    let row: any[] = []
    let rowD: any[] = []
    let col = ['Reservation Id', 'Customer Id', 'Table Id', 'Reservation From', 'Reservation To', 'Reservation State']; // initialization for headers
    let title = "Reservations Report" // title of report
    for (let a = 0; a < this.reportFilteredReservation.length; a++) {//Data
      row.push(this.reportFilteredReservation[a].reservation_Id)
      row.push(this.reportFilteredReservation[a].customer_Id)
      row.push(this.reportFilteredReservation[a].table_Id)
      row.push(this.reportFilteredReservation[a].reservation_From)
      row.push(this.reportFilteredReservation[a].reservation_To)
      row.push(this.reportFilteredReservation[a].res_Status)
      rowD.push(row);
      row = [];
    }
    this.getReport(col, rowD, title);
  }

  getReport(col: any[], rowD: any[], title: any) {//Download
    const totalPagesExp = "{total_pages_count_string}";
    var pdf: any;
    pdf = new jsPDF('l', 'pt', 'legal');
    pdf.setTextColor(51, 156, 255);
    pdf.text("" + title, 435, 100);  //
    pdf.setLineWidth(1.5);
    pdf.line(5, 107, 995, 107)
    var pageContent = function (data: any) {
      // HEADER

      // FOOTER
      var str = "Page " + data.pageCount;
      // Total page number plugin only available in jspdf v1.0+
      if (typeof pdf.putTotalPages === 'function') {
        str = str + " of " + totalPagesExp;
      }
      pdf.setFontSize(10);
      var pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
      pdf.text(str, data.settings.margin.left, pageHeight - 10); // showing current page number
    };
    pdf.autoTable(col, rowD,
      {
        addPageContent: pageContent,
        margin: { top: 110 },
      });
    pdf.setProperties({
      title: "Reservations Report"
    });
    //for adding total number of pages // i.e 10 etc
    if (typeof pdf.putTotalPages === 'function') {
      pdf.putTotalPages(totalPagesExp);
    }

    window.open(URL.createObjectURL(pdf.output("blob")));
    pdf.save(title + '.pdf');
  }
}
